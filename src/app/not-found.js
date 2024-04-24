import Link from "next/link"
import PageStoryHeader from "@/components/common/pagestoryheader"

export default function Custom404() {
    return (
        <>
            <PageStoryHeader
                title="เย้ยย ไม่มีหน้านี้นะ"
                desc="พี่เม่นลองหาทั่วเลเวลแล้วนะ ยังหาไม่เจอเลย มาผิดที่หรือเปล่า"
            />
            <Link href="/">
                <button appearance="filled">กลับไปหน้าแรกก่อนมั้ย</button>
            </Link>
        </>
    )
}