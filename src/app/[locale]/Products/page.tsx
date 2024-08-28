// import "@/src/app/[locale]/Products/Products.css"
// import Link from "next/link"
// export default async function Products(){

//     let products=await fetch('https://jsonplaceholder.typicode.com/todos')
//     let productsRes=await products.json()
//     console.log(productsRes);
    
//     // let productsResMap=productsRes.map((product:any)=>{
//     //     return(
//     //         <div>
//     //             <h1>{product.title}</h1>
//     //             <h2>{product.id}</h2>
//     //         </div>
//     //     )
//     // })


//     return(
//         <section className="products">
//             <h1>Products</h1>
//             {/* {productsResMap} */}
//             {productsRes.map((product: any) => (
//                 <div className="product-item" key={product.id}>
//                     <Link href={`/Products/${product.id}`}>
//                     <h1>{product.title}</h1>
//                     <h2>{product.id}</h2>
//                     </Link>
                    
//                 </div>
//             ))}
//         </section>
//     )
// }


"use client";

import "@/src/app/[locale]/Products/Products.css";
import Link from "next/link";
import { useParams } from "next/navigation"; // Import useParams for locale handling

export default async function Products() {
  const { locale } = useParams(); // Get the current locale

  let products = await fetch('https://jsonplaceholder.typicode.com/todos');
  let productsRes = await products.json();
  console.log(productsRes);

  return (
    <section className="products">
      <h1>Products</h1>
      {productsRes.map((product: any) => (
        <div className="product-item" key={product.id}>
          <Link href={`/${locale}/Products/${product.id}`}>
            <h1>{product.title}</h1>
            <h2>{product.id}</h2>
          </Link>
        </div>
      ))}
    </section>
  );
}
