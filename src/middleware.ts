// src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl
  if (url.hostname === 'www.italyexperiencehub.com') {
    url.hostname = 'italyexperiencehub.com'
    return NextResponse.redirect(url, 308)
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
