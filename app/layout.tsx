
// "use client"
import type { Metadata } from "next";
import BootstrapProvider from "./components/BootstrapProvider";

import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";

import "./globals.css";
import Nav from "./components/Nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce website",
  description: "we produce all kinds of products",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{

  // useEffect(() => {
  
  //   if (typeof window !== 'undefined') {
  //     require('bootstrap/dist/js/bootstrap.bundle.min.js');
  //   }
  // }, []);
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Include the custom font */}
        <link href="https://fonts.googleapis.com/css2?family=New+Amsterdam&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <BootstrapProvider/>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
