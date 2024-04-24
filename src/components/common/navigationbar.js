import Link from "next/link"

export default function NavBar() {
  return (
    <nav className="
      sticky top-0 border-b bg-black bg-opacity-80
      border-neutral-800 backdrop-blur-lg
    ">
      <div className="
        flex justify-between max-w-5xl m-auto p-2 
        [&>section>*]:inline-block [&>section>*]:p-2
      ">
        <section>
          <p><b>bluesonic.</b></p>
        </section>
        <section>
          <Link href="/">Home</Link>
          <Link href="/memories">Memories</Link>
          <Link href="/story">Story</Link>
        </section>
      </div>
    </nav>
  )
}