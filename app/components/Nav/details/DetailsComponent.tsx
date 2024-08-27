export default async function DetailsComponent(productId:any){

    await new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve()
        }, 2000);
    })
    // console.log(productId);
    let Id=productId.productId
  let res=await  fetch(`https://jsonplaceholder.typicode.com/todos/${Id}`,{
    // cache:"force-cache"
    cache:"no-store",
    // next:{revalidate:60}
  })
   let productRes=await res.json()
    //   console.log(productRes);
    return(
        <>
            <h1>{productRes.id}</h1>
            <h1>{productRes.title}</h1>
        </>
    )
}