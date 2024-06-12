import type { Metadata } from "next";
import { Inter , IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] , variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({
subsets: ['latin'],
weight: ['400' , '700'],
variable: '--font-ibm-plex-serif'
});

export const metadata: Metadata = {
  title: "Heritage Bank",
  description: "Heritage is a modern banking platform for everyone.",
  icons: '/icons/logo.svg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // The code snippet you provided is a part of a React component, likely within a Next.js application. This code is responsible for rendering the HTML structure of a web page, applying specific font styles to the body, and rendering children elements inside the body
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
