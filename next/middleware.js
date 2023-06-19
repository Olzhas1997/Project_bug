import {NextResponse} from "next/server";

export function middleware(req) {
  return NextResponse.rewrite(new URL('/auth', req.nextUrl))
}

export const config = {
  matcher: "/test"
}
