"use client"
//region Local Imports
import Head from "next/head"
import { CssBaseline, Box } from "@mui/material";
//endregion

import styles from './layout.module.css';
import { Header } from './header'
import { Footer } from './footer'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <CssBaseline />
    <html lang="en">
      <Head>
        <title>My App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
      <Header />
        {children}
      <Footer />
      </body>
    </html>
    </>
    
  )
}
