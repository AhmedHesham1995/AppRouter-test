import Link from "next/link";
import '@/app/components/Nav/Nav.css'
export default function Nav(){
    return(
        <section className="navbar">
            <Link href="/">
                Home
            </Link>
            <Link href="/About">
                About
            </Link>
            <Link href="/Contact">
                Contact
            </Link>
            <Link href="/Products">
                Products
            </Link>
        </section>
    )
}