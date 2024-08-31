// import '@/app/Products/ProductDetails.css'
// export default async function ProductDetails(params:any){
//     console.log(params.params.productId);
//     let productId=params.params.productId
//     await new Promise<void>((resolve) => {
//         setTimeout(() => {
//             resolve()
//         }, 2000);
//     })
//   let res=await  fetch(`https://jsonplaceholder.typicode.com/todos/${productId}`,{
//     // cache:"force-cache"
//     // cache:"no-store",
//     next:{revalidate:60}
//   })
//    let productRes=await res.json()
//     //   console.log(productRes);
      
//     return(
//         <section className="productDetails">
//             <h1>product details</h1>
//             <h1>{productRes.id}</h1>
//             <h1>{productRes.title}</h1>
//         </section>
//     )
// }


import '@/src/app/[locale]/components/details/ProductDetails.css'
import { Suspense } from 'react';
import DetailsComponent from '@/src/app/[locale]/components/details/DetailsComponent';
export default async function ProductDetails(params:any){
    // console.log(params.params.productId);
    let productId=params.params.productId
   
      let loading=(<div>Loadingggg</div>)
    return(
        <section className="productDetails">
            <h1>product details</h1>

            <Suspense fallback={loading}>
                {/* <DetailsComponent productId={productId}/> */}
                <DetailsComponent productId={productId}/>
            </Suspense>
            
        </section>
    )
}
