import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { nextUrl } = request;

  // Extract the "Accept-Language" header from the user's request
  const acceptLanguage = request.headers.get("accept-language");
  console.log("Accept-Language header:", acceptLanguage); // Debugging line

  const userLanguage = acceptLanguage?.split(",")[0]?.split("-")[0]; // Extract primary language
  console.log("User language:", userLanguage); // Debugging line

  const supportedLocales = ["en", "fr"]; // Define supported locales
  const defaultLocale = "en"; // Default fallback language

  // Determine the appropriate locale
  const locale = supportedLocales.includes(userLanguage || "")
    ? userLanguage
    : defaultLocale;

  console.log("Selected locale:", locale); // Debugging line

  const cleanPathname = nextUrl.pathname.replace(/\/$/, ""); // Remove trailing slash
  if (!cleanPathname.startsWith(`/${locale}`)) {
    const redirectUrl = new URL(`/${locale}${cleanPathname}`, request.url);
    console.log("Redirecting to:", redirectUrl.toString()); // Debugging line
    return NextResponse.redirect(redirectUrl);
  }

  // If the locale is not already in the URL, redirect to the correct locale
  if (!nextUrl.pathname.startsWith(`/${locale}`)) {
    const redirectUrl = new URL(`/${locale}${cleanPathname}`, request.url);
    redirectUrl.search = nextUrl.search; // Preserve query parameters

    console.log("Redirecting to:", redirectUrl.toString()); // Debugging line
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

// Apply middleware to all routes except static files and API routes
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/).*)"],
};
