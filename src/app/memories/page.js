const displayImages = true

import { promises as fs } from 'fs';

import PageStoryHeader from "@/components/common/pagestoryheader"

export const metadata = {
  title: "Memories"
}

export default async function Gallery() {
  const imageListRaw = await fs.readFile(
    process.cwd() + '/public/assets/json/memoriesList.json', 'utf8'
  );
  const imageList = JSON.parse(imageListRaw)

  console.log(imageList);

  return (
    <>
      <div>
        <PageStoryHeader 
          title="ภาพความทรงจำ"
          desc="
            รูปภาพ เป็นเครื่องมือในการเก็บความทรงจำที่มหัศจรรย์มากๆ ในทุกๆรูปภาพนั้น มีเรี่องราว 
            อารมณ์ และทุกความรู้สึกซ่อนอยู่ และพี่ๆเชื่อว่า น้องๆก็คงมีประสบการณ์ที่น้องจำ 
            และอยากเห็นอีกนะ พี่ๆ ได้ถ่ายรูปมาตลอดกิจกรรมเลย ลองดูนะ ชอบรูปไหนไหม น้องๆ
            สามารถเซฟรูป และเอาไปใช้ตามที่น้องอยากได้ ได้เลยนะ พี่ไม่ติดอะไรครับ :)
          "
        />
        <div className="
          grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1
        ">
          {
            displayImages ? (
              imageList.map((data) => (
                <div>
                  <img 
                    className="object-cover rounded-lg w-full" 
                    src={"/assets/img/memories/" + data.url} 
                  />
                  <p className="mt-2">{data.desc}</p>
                </div>
              ))
            ) : (
              <div className="
                col-span-1 bg-neutral-900 border border-neutral-800 
                rounded-lg px-4 py-8 text-center lg:col-span-3 md:col-span-2 
                sm:col-span-1
              ">
                <h1 className="!text-7xl mso-icon animate-bounce">
                  gallery_thumbnail
                </h1>
                <p>
                  กำลังประมวลผลภาพกิจกรรม ค่อยกลับมานะ<br />
                  XX/XX/XXXX ณ XX:XX
                </p>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}
