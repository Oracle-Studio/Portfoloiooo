import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Mondher ben haj ammar ",
  description: "A portfolio website built with Next.js and Tailwind CSS",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function LanguageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string }; // If you're confident this is correct
}) {
  return (
    <html lang={params.lang} className={`${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
