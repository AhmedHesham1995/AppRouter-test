// import Link from "next/link";
// import '@/src/app/components/Nav/Nav.css'
// export default function Nav(){
//     return(
//         <section className="navbar">
//             <Link href="/">
//                 Home
//             </Link>
//             <Link href="/About">
//                 About
//             </Link>
//             <Link href="/Contact">
//                 Contact
//             </Link>
//             <Link href="/Products">
//                 Products
//             </Link>
//         </section>
//     )
// }


// import { useTranslations } from 'next-intl';
// import Link from "next/link";
// import '@/src/app/components/Nav/Nav.css';

// export default function Nav() {
//   const t = useTranslations('Nav');

//   return (
//     <section className="navbar">
//       <Link href="/">
//         {t('home')}
//       </Link>
//       <Link href="/About">
//         {t('about')}
//       </Link>
//       <Link href="/Contact">
//         {t('contact')}
//       </Link>
//       <Link href="/Products">
//         {t('products')}
//       </Link>
//     </section>
//   );
// }

// "use client";
// import { useTranslations } from 'next-intl';
// import Link from 'next/link';
// import { useParams } from 'next/navigation';  // Updated import
// import '@/src/app/[locale]/components/Nav/Nav.css';

// export default function Nav() {
//   const t = useTranslations('Nav');
//   const { locale } = useParams();  // Use useParams to get the locale

//   return (
//     <section className="navbar">
//       <Link href={`/${locale}`}>
//         {t('home')}
//       </Link>
//       <Link href={`/${locale}/About`}>
//         {t('about')}
//       </Link>
//       <Link href={`/${locale}/Contact`}>
//         {t('contact')}
//       </Link>
//       <Link href={`/${locale}/Products`}>
//         {t('products')}
//       </Link>
//     </section>
//   );
// }

"use client";

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import '@/src/app/[locale]/components/Nav/Nav.css';

export default function Nav() {
  const t = useTranslations('Nav');
  const { locale } = useParams();
  const pathname = usePathname();

  // Determine the alternate locale
  const alternateLocale = locale === 'en' ? 'ar' : 'en';

  // Create a new path with the alternate locale
  const newPath = `/${alternateLocale}${pathname.replace(`/${locale}`, '')}`;

  return (
    <section className="navbar">
      <Link href={`/${locale}`}>
        {t('home')}
      </Link>
      <Link href={`/${locale}/About`}>
        {t('about')}
      </Link>
      <Link href={`/${locale}/Contact`}>
        {t('contact')}
      </Link>
      <Link href={`/${locale}/Products`}>
        {t('products')}
      </Link>

      {/* Language switcher dropdown */}
      <div className="language-switcher">
        <button className="dropdown-button">
          {locale === 'en' ? 'English' : 'عربي'}
        </button>
        <div className="dropdown-content">
          <Link href={newPath}>
            {locale === 'en' ? 'عربي' : 'English'}
          </Link>
        </div>
      </div>
    </section>
  );
}
