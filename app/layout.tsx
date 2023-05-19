// "use client"
//region Local Imports
import Head from "next/head";
import { Noto_Sans } from "next/font/google";
import type { Metadata } from 'next'
//endregion

import { Header } from "./header";
import { Footer } from "./footer";
import CookieBanner from "~/components/cookie-banner/cookie-banner";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Legal Expert Home Page',
  description: 'Generated by Next.js',
}


const notoSansFontF = Noto_Sans({
  weight: "500",
  subsets: ["latin"],
});

function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <html lang="en">
        <Head>
          <title>My App</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body className={notoSansFontF.className}>
          <CookieBanner />
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
export default RootLayout;