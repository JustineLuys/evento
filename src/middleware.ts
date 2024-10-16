import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname.slice(1);

  if (path === "events" || path === "all") {
    return NextResponse.redirect(new URL("/events/all", request.url));
  }
}

export const config = {
  matcher: ["/events", "/all"],
};
