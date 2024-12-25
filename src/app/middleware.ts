import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { nextUrl } = request;

  // Extract the "Accept-Language" header from the user's request
  const acceptLanguage = request.headers.get("accept-language");
  const userLanguage = acceptLanguage?.split(",")[0]?.split("-")[0]; // e.g., 'en'

  const supportedLocales = ["en", "fr"]; // Define supported locales
  const defaultLocale = "en"; // Default fallback language

  // Determine the appropriate locale
  const locale = supportedLocales.includes(userLanguage || "")
    ? userLanguage
    : defaultLocale;

  // If the locale is not already in the URL, redirect to the correct locale
  if (!nextUrl.pathname.startsWith(`/${locale}`)) {
    return NextResponse.redirect(
      new URL(`/${locale}${nextUrl.pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

// Apply middleware to all routes except static files and API routes
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/).*)"],
};
