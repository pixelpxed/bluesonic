import Link from "next/link"

export default function NavBar() {
    return (
        <nav className="sticky top-0 bg-black border-b border-neutral-800">
            <div className="
                flex justify-between max-w-5xl m-auto p-2 
                [&>section>*]:inline-block [&>section>*]:p-2
            ">
                <section>
                    <p><b>bluesonic.</b></p>
                </section>
                <section>
                    <Link href="/">Home</Link>
                    <Link href="/gallery">Gallery</Link>
                    <Link href="/contact">Contact</Link>
                </section>
            </div>
        </nav>
    )
}