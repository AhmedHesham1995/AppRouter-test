import Link from "next/link";
import '@/app/Products/ProductsNav/ProductsNav.css'
export default function ProductsNav(){
    return(

        <section className="productsNav">
             <Link href="/">
                Home
            </Link>
            <Link href="/Products">
                Products
            </Link>
            <Link href="/Products/Categories">
            Categories
            </Link>
            <Link href="/Products/Cart">
            Cart
            </Link>
        </section>
    )
}