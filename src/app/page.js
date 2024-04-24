import Head from "next/head";
import Link from "next/link"

import PageStoryHeader from "@/components/common/pagestoryheader"

export const metadata = {
  title: "bluesonic."
}

export default function Home() {
  return (
    <>
      <div>
        <PageStoryHeader
          title="พี่ว่าแล้วว่าน้องต้องอ่าน"
          desc="แฮร่! สวัสดีครับน้องๆ bluesonic ทุกคน ขอบคุณที่อย่างน้อยๆ ก็ได้เปิดมาอ่านนะ"
        />
        <div className="m-auto w-full">
          <Link href="/gallery">
            <button appearance="filled">ดูรูปภาพความทรงจำกันเถอะ</button>
          </Link>
        </div>
      </div>
    </>
  );
}
