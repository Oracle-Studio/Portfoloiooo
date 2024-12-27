import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const supportedLocales = ["en", "fr"];
const defaultLocale = "en"; // Must match `defaultLocale` in next.config.ts

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip API routes, Next.js internals, and static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/");
  const currentLocale = segments[1];

  if (supportedLocales.includes(currentLocale)) {
    return NextResponse.next();
  }

  const acceptLanguage = request.headers.get("accept-language");
  const detectedLocale = acceptLanguage
    ? acceptLanguage.split(",")[0].split("-")[0]
    : defaultLocale;

  const localeToUse = supportedLocales.includes(detectedLocale)
    ? detectedLocale
    : defaultLocale;

  const redirectUrl = new URL(`/${localeToUse}${pathname}`, request.url);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
