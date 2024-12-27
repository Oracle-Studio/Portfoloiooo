import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const supportedLocales = ["en", "fr"];
const defaultLocale = "en"; // Default fallback locale

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

  // Check if the user is already in a locale path (e.g., /en or /fr)
  const segments = pathname.split("/");
  const currentLocale = segments[1];

  if (supportedLocales.includes(currentLocale)) {
    return NextResponse.next();
  }

  // Handle the root path `/` specifically
  if (pathname === "/") {
    const acceptLanguage = request.headers.get("accept-language");
    const detectedLocale = acceptLanguage
      ? acceptLanguage.split(",")[0].split("-")[0] // Extract the primary language
      : defaultLocale;

    const localeToUse = supportedLocales.includes(detectedLocale)
      ? detectedLocale
      : defaultLocale;

    // Redirect to the appropriate locale
    const redirectUrl = new URL(`/${localeToUse}`, request.url);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
