// "use client"
//region Local Imports
import Head from "next/head"
import { CssBaseline } from "@mui/material";
//endregion

import { Header } from './header'
import { Footer } from './footer'
import CookieBanner from '~/components/cookie-banner/cookie-banner'
import "./globals.css";

export default function RootLayout({
  children,
  ...restProps
}: {
  children: React.ReactNode
}) {
  // useCookies(IS_SHOW_COOKIE_BANNER, true)
  // const cookieStore = cookies();
  // cookieStore().set('isShowCookieBanner', true);
  return (
    <>
    <html lang="en">
      <Head>
        <title>My App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
      <CookieBanner />
        <Header />
          {children}
        <Footer />
     
      </body>
    </html>
    </>    
  )
}
