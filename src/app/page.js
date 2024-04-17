import Image from "next/image";
import NavBar from "@/components/common/navbar";

export default function Home() {
  return (
    <body>
      <NavBar />
      <main className="max-w-5xl m-auto p-4">
        <div className="my-16">
          <div>
            <h1 className="text-5xl">พี่ว่าแล้วว่าน้องต้องอ่าน แฮร่</h1>
            <p>สวัสดีครับน้องๆ bluesonic ทุกคน ขอบคุณที่อย่างน้อยๆ ก็ได้เปิดมาอ่านนะ</p>
          </div>
          <div>
            <button type="fill">ดูรูปภาพความทรงจำกันเถอะ</button>
            <button type="outline">ข้อความจากพี่ๆ</button>
          </div>
        </div>
      </main>
    </body>
  );
}
