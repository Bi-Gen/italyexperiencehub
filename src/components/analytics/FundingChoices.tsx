// src/components/analytics/FundingChoices.tsx
"use client";
import Script from "next/script";

/**
 * Stub TCF + loader Funding Choices.
 * Espone __tcfapi subito (in coda) e poi carica la CMP di Google.
 */
export default function FundingChoices() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT; // es: "ca-pub-4718945941038682"
  if (!client) return null;

  return (
    <>
      {/* Stub TCF "prima di tutto" */}
      <Script id="tcf-stub" strategy="beforeInteractive">
        {`
          (function() {
            var TCF_LOCATOR_NAME='__tcfapiLocator';
            var queue = [];
            var win = window;

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
              queue.push(args); // accoda finché la CMP vera non sostituisce lo stub
            }

            function postMessageEventHandler(event) {
              var isStr = typeof event.data === 'string';
              var json = {};
              try { json = isStr ? JSON.parse(event.data) : event.data; } catch (ignore) {}
              var payload = json.__tcfapiCall;
              if (payload) {
                window.__tcfapi(payload.command, payload.version, function(retValue, success) {
                  var returnMsg = {
                    __tcfapiReturn: { returnValue: retValue, success: success, callId: payload.callId }
                  };
                  event.source.postMessage(isStr ? JSON.stringify(returnMsg) : returnMsg, '*');
                }, payload.parameter);
              }
            }

            if (!win.__tcfapi) {
              win.__tcfapi = tcfAPIHandler;
              win.addEventListener('message', postMessageEventHandler, false);
            }

            function ensureLocator() {
              if (!win.frames[TCF_LOCATOR_NAME]) {
                if (document.body) addFrame();
                else setTimeout(ensureLocator, 5);
              }
            }
            ensureLocator();

            function flushWhenReady() {
              try {
                if (typeof win.__tcfapi === 'function' && win.__tcfapi !== tcfAPIHandler) {
                  var q = queue.slice(); queue = [];
                  q.forEach(function(args){ win.__tcfapi.apply(win, args); });
                } else {
                  setTimeout(flushWhenReady, 200);
                }
              } catch (e) {
                setTimeout(flushWhenReady, 200);
              }
            }
            flushWhenReady();
          })();
        `}
      </Script>

      {/* Loader Funding Choices (CMP Google) */}
      <Script
        id="fc-loader"
        strategy="afterInteractive"
        src={`https://fundingchoicesmessages.google.com/i/${client}?ers=1`}
        async
      />
    </>
  );
}
