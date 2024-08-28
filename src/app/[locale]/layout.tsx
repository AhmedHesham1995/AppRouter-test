// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { IntlProvider } from 'next-intl';
// import BootstrapProvider from "../components/BootstrapProvider";
// import Nav from "../components/Nav/Nav";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Ecommerce website",
//   description: "we produce all kinds of products",
// };

// interface RootLayoutProps {
//   children: React.ReactNode;
//   params: { locale: string };
// }

// export default async function RootLayout({
//   children,
//   params: { locale },
// }: RootLayoutProps) {
//   let messages: Record<string, string> = {};
//   try {
//     messages = (await import(`../../locales/${locale}/common.json`)).default;
//   } catch (error) {
//     console.error('Error loading locale messages:', error);
//     messages = (await import(`../../locales/en/common.json`)).default; // Fallback
//   }

//   return (
//     <html lang={locale}>
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
//         <link href="https://fonts.googleapis.com/css2?family=New+Amsterdam&display=swap" rel="stylesheet" />
//       </head>
//       <body className={inter.className}>
//         <IntlProvider locale={locale} messages={messages}>
//           <BootstrapProvider />
//           <Nav />
//           {children}
//         </IntlProvider>
//       </body>
//     </html>
//   );
// }



// app/[locale]/layout.tsx

// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { IntlProvider } from 'next-intl';
// import BootstrapProvider from '../components/BootstrapProvider';
// import Nav from '../components/Nav/Nav';
// // import './globals.css';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Ecommerce website',
//   description: 'We produce all kinds of products',
// };

// interface RootLayoutProps {
//   children: React.ReactNode;
//   params: { locale: string };
// }

// export default async function RootLayout({
//   children,
//   params: { locale },
// }: RootLayoutProps) {
//   let messages: Record<string, string> = {};
//   try {
//     messages = (await import(`../../locales/${locale}/common.json`)).default;
//   } catch (error) {
//     console.error('Error loading locale messages:', error);
//     messages = (await import('../../locales/en/common.json')).default; // Fallback to default
//   }

//   return (
//     <html lang={locale}>
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
//         <link href="https://fonts.googleapis.com/css2?family=New+Amsterdam&display=swap" rel="stylesheet" />
//       </head>
//       <body className={inter.className}>
//         <IntlProvider locale={locale} messages={messages}>
//           <BootstrapProvider />
//           <Nav />
//           {children}
//         </IntlProvider>
//       </body>
//     </html>
//   );
// }



// // app/[locale]/layout.tsx

// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { IntlProvider } from 'next-intl';
// import BootstrapProvider from '../components/BootstrapProvider';
// import Nav from '../components/Nav/Nav';
// // import './globals.css';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Ecommerce website',
//   description: 'We produce all kinds of products',
// };

// interface RootLayoutProps {
//   children: React.ReactNode;
//   params: { locale: string };
// }

// export default async function RootLayout({
//   children,
//   params: { locale },
// }: RootLayoutProps) {
//   let messages: Record<string, string> = {};
//   try {
//     messages = (await import(`../../locales/${locale}/common.json`)).default;
//   } catch (error) {
//     console.error('Error loading locale messages:', error);
//     messages = (await import('../../locales/en/common.json')).default; // Fallback to default
//   }

//   return (
//     <html lang={locale}>
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
//         <link href="https://fonts.googleapis.com/css2?family=New+Amsterdam&display=swap" rel="stylesheet" />
//       </head>
//       <body className={inter.className}>
//         <IntlProvider locale={locale} messages={messages}>
//           <BootstrapProvider />
//           <Nav />
//           {children}
//         </IntlProvider>
//       </body>
//     </html>
//   );
// }


// import {NextIntlClientProvider} from 'next-intl';
// import {getMessages} from 'next-intl/server';
// import Nav from './components/Nav/Nav';
// // import Nav from '@/src/app/[locale]/components/Nav';
 
// export default async function LocaleLayout({
//   children,
//   params: {locale}
// }: {
//   children: React.ReactNode;
//   params: {locale: string};
// }) {
//   // Providing all messages to the client
//   // side is the easiest way to get started
//   const messages = await getMessages();
 
//   return (
//     <html lang={locale}>
//       <body>
//         <NextIntlClientProvider messages={messages}>
//           <Nav/>
//           {children}
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }


import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Nav from './components/Nav/Nav';

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  // Determine the direction based on the locale
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Nav />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
