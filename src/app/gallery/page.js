export const metadata = {
  title: "Memories"
}

export default function Gallery() {
  return (
    <>
      <div>
        <div className="my-16">
          <h1 className="text-5xl">รูปภาพความทรงจำ</h1>
          <p>คำบรรยายเบียวๆ</p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="aspect-video border border-neutral-800 rounded-md" />
        </div>
      </div>
    </>
  )
}

