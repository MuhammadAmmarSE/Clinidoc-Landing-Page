import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppins = localFont({
  src: [
    { path: "../public/fonts/poppins-600.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/poppins-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

const plexSans = localFont({
  src: [
    { path: "../public/fonts/plex-sans-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/plex-sans-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = localFont({
  src: [{ path: "../public/fonts/plex-mono-500.woff2", weight: "500", style: "normal" }],
  variable: "--font-plex-mono",
  display: "swap",
});

const siteUrl = "https://www.clinidoc.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CliniDoc — Connected Clinical Care Platform",
    template: "%s · CliniDoc",
  },
  description:
    "CliniDoc connects patients, care teams, clinical programs, assessments, appointments, documentation and clinical records in one connected healthcare platform.",
  openGraph: {
    title: "CliniDoc — Connected Clinical Care Platform",
    description:
      "CliniDoc connects patients, care teams, clinical programs, assessments, appointments, documentation and clinical records in one connected healthcare platform.",
    url: siteUrl,
    siteName: "CliniDoc",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CliniDoc — Connected Clinical Care Platform",
    description:
      "CliniDoc connects patients, care teams, clinical programs, assessments, appointments, documentation and clinical records in one connected healthcare platform.",
  },
  icons: {
    icon: "/brand/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body className="font-sans">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
