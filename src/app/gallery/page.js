export const metadata = {
  title: "Memories"
}

function ImageCard({ url, desc }) {
  return (
    <div>
      <img className="object-cover rounded-lg w-full" src={"/assets/img/gallery/" + url} />
      <p className="mt-2 text-neutral-400">"{desc}"</p>
    </div>
  )
}

const displayImages = false

export default function Gallery() {
  return (
    <>
      <div>
        <div className="my-16">
          <h1 className="text-5xl">ภาพความทรงจำ</h1>
          <p>
            ในภาพเหล่านี้ เชื่อว่ามีเวทมนตร์ซ่อนอยู่ในแสงสีและรายละเอียดเล็กๆ ที่น่าอัศจรรย์ 
            แต่สิ่งที่ทำให้เธอรู้สึกมหัศจรรย์มากที่สุด คือความทรงจำที่มันสร้างขึ้นให้เธอ 
            มันเหมือนเป็นแหล่งพลังที่ไม่มีที่สิ้นสุดที่มาพร้อมกับเวทมนตร์แห่งความทรงจำ</p>
        </div>
        <div className="
          grid grid-cols-3 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1
        ">
          <div className="
            col-span-3 bg-neutral-900 border border-neutral-800 
            rounded-lg p-4 text-center lg:col-span-3 md:col-span-2 sm:col-span-1
          ">
            <h1 className="!text-7xl mso-icon">search</h1>
            <p>พี่ขอเวลาประมวลผลภาพแปปนึงนะ ค่อยกลับมาดูคับผม
            <b> ตามกำหนดการ พี่ๆจะเสร็จในวันที่ XX/XX/XXXX @ XX:XX</b></p>
          </div>
          <ImageCard 
            url="1DDA6EF2-4342-4C5D-8827-9BEE755F67EE_1_105_c.jpeg" 
            desc="คืนวัน Workman อันน่าจดจำ"
          />
          <ImageCard 
            url="6FECE1B4-5680-4784-AD07-67A0C649E021_1_105_c.jpeg" 
            desc="เงียบเข้าไว้น้อง แล้วดูพี่นะ" 
          />
          <ImageCard 
            url="9B1FE6A7-08C6-4C5D-9DAA-4164997635FD_1_105_c.jpeg" 
            desc="อาหารอันแสนง่าย" 
          />
        </div>
      </div>
    </>
  )
}
