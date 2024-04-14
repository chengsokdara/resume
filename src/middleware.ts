import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.cookies.has("version")) {
    const version = request.cookies.get("version")!.value;
    return NextResponse.redirect(new URL(`/${version}`, request.url));
  }

  return NextResponse.redirect(new URL("/v1", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/",
};
