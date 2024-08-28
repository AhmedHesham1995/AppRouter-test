import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ProductsNav from "./ProductsNav/ProductsNav";
import Nav from "../components/Nav/Nav";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "products section",
  description: "we produce all kinds of products",
};

export default function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Nav/> */}
        <ProductsNav/>
        {children}
      </body>
    </html>
  );
}
