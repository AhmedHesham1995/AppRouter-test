// import Link from "next/link";
// import '@/src/app/[locale]/Products/ProductsNav/ProductsNav.css'
// export default function ProductsNav(){
//     return(

//         <section className="productsNav">
//              <Link href="/">
//                 Home
//             </Link>
//             <Link href="/Products">
//                 Products
//             </Link>
//             <Link href="/Products/Categories">
//             Categories
//             </Link>
//             <Link href="/Products/Cart">
//             Cart
//             </Link>
//         </section>
//     )
// }


"use client";

import Link from "next/link";
import { useParams } from "next/navigation"; // Import useParams for locale handling
import '@/src/app/[locale]/Products/ProductsNav/ProductsNav.css';

export default function ProductsNav() {
  const { locale } = useParams(); // Get the current locale

  return (
    <section className="productsNav">
      <Link href={`/${locale}`}>
        Home
      </Link>
      <Link href={`/${locale}/Products`}>
        Products
      </Link>
      <Link href={`/${locale}/Products/Categories`}>
        Categories
      </Link>
      <Link href={`/${locale}/Products/Cart`}>
        Cart
      </Link>
    </section>
  );
}
