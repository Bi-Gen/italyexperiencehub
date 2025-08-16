// src/components/analytics/FundingChoices.tsx
"use client";
import Script from "next/script";

/**
 * Carica la CMP Google (Funding Choices) + stub TCF.
 * - MOSTRA __tcfapi come funzione già al primo paint (queue finché la CMP non è pronta)
 * - Crea l'iframe __tcfapiLocator richiesto dallo standard TCF
 * - Carica lo script Funding Choices per il tuo publisher id
 */
export default function FundingChoices() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT; // es: "ca-pub-4718945941038682"
  if (!client) return null;

  return (
    <>
      {/* ✅ Stub TCF + postMessage handler (prima di tutto) */}
      <Script id="tcf-stub" strategy="beforeInteractive">
        {`
          (function() {
            var TCF_LOCATOR_NAME='__tcfapiLocator';
            var queue = [];
            var win = window;
            var cmpFrame;

            function addFrame() {
              if (!win.frames[TCF_LOCATOR_NAME]) {
                var iframe = document.createElement('iframe');
                iframe.style.cssText='display:none';
                iframe.name = TCF_LOCATOR_NAME;
                document.body.appendChild(iframe);
              }
            }

            function tcfAPIHandler() {
              var args = arguments;
              // Mettiamo in coda le chiamate finché la CMP vera non rimpiazza lo stub
              queue.push(args);
            }

            function postMessageEventHandler(event) {
              var msgIsString = typeof event.data === 'string';
              var json = {};
              try { json = msgIsString ? JSON.parse(event.data) : event.data; } catch (ignore) {}
              var payload = json.__tcfapiCall;
              if (payload) {
                window.__tcfapi(payload.command, payload.version, function(retValue, success) {
                  var returnMsg = {
                    __tcfapiReturn: {
                      returnValue: retValue,
                      success: success,
                      callId: payload.callId
                    }
                  };
                  event.source.postMessage(msgIsString ? JSON.stringify(returnMsg) : returnMsg, '*');
                }, payload.parameter);
              }
            }

            if (!win.__tcfapi) {
              win.__tcfapi = tcfAPIHandler;
              win.addEventListener('message', postMessageEventHandler, false);
            }

            // Crea l'iframe locator
            function signalGooglefcPresent() {
              if (!win.frames[TCF_LOCATOR_NAME]) {
                if (document.body) {
                  addFrame();
                } else {
                  setTimeout(signalGooglefcPresent, 5);
                }
              }
            }
            signalGooglefcPresent();

            // Poll: quando la CMP vera sostituisce lo stub, svuota la coda
            function flushQueueWhenReady() {
              try {
                // Se la CMP vera ha "rimpiazzato" lo stub, __tcfapi !== tcfAPIHandler
                if (typeof win.__tcfapi === 'function' && win.__tcfapi !== tcfAPIHandler) {
                  var q = queue.slice();
                  queue = [];
                  q.forEach(function(args){ win.__tcfapi.apply(win, args); });
                } else {
                  setTimeout(flushQueueWhenReady, 200);
                }
              } catch (e) {
                setTimeout(flushQueueWhenReady, 200);
              }
            }
            flushQueueWhenReady();
          })();
        `}
      </Script>

      {/* ✅ Loader Funding Choices per il tuo publisher id */}
      <Script
        id="fc-loader"
        strategy="afterInteractive"
        src={`https://fundingchoicesmessages.google.com/i/${client}?ers=1`}
        async
      />
    </>
  );
}
