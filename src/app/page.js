import Head from "next/head";
import Link from "next/link"

export const metadata = {
  title: "bluesonic."
}

export default function Home() {
  return (
    <>
      <div>
        <div className="my-16">
          <h1 className="text-5xl">พี่ว่าแล้วว่าน้องต้องอ่าน</h1>
          <p>แฮร่! สวัสดีครับน้องๆ bluesonic ทุกคน ขอบคุณที่อย่างน้อยๆ ก็ได้เปิดมาอ่านนะ</p>
        </div>
        <div className="m-auto w-full">
          <Link href="/gallery">
            <button type="filled">ดูรูปภาพความทรงจำกันเถอะ</button>
          </Link>
        </div>
      </div>
    </>
  );
}
