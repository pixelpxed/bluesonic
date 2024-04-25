const displayImages = false

import Link from "next/link";
import Image from "next/image";
import PageStoryHeader from "@/components/common/pagestoryheader"

export const metadata = {
  title: "Memories",
  desc: "รูปภาพ เป็นเครื่องมือในการเก็บความทรงจำที่มหัศจรรย์มากๆ ในทุกๆรูปภาพนั้น มีเรี่องราว อารมณ์ และทุกความรู้สึกซ่อนอยู่"
}

export default async function Gallery() {
  // const imageListRaw = await fs.readFile(
  //   process.cwd() + '/public/assets/json/memoriesList.json', 'utf8'
  // );
  // const imageList = JSON.parse(imageListRaw)
  const imageContext = require.context('../../../public/assets/img/memories', false, /\.(png|jpe?g|svg)$/);
  const images = imageContext.keys().map(imageContext);

  const filters = ["เบื้องหลังความทรงจำ", "ท่องแดนสวน", ["ค่ายปฐมนิเทศ​วันที่ 1", "ค่ายปฐมนิเทศ​วันที่ 2", "ค่ายปฐมนิเทศ​วันที่ 3"]]

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
        {/* <div>
          <select name="" id="">
            <option value="filter">เบื้องหลังความทรงจำ</option>
            <option value="filter">ท่องแดนสวน</option>
            <optgroup label="ค่ายปฐมนิเทศ​">
              <option value="filter">วันที่ 1</option>
              <option value="filter">วันที่ 2</option>
              <option value="filter">วันที่ 3</option>
            </optgroup>
          </select>
        </div> */}
        {
          displayImages ? (
            <>
              {/* <p>พี่ ๆ เตรียมค่าย</p> */}
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {
                  images.map((image, index) => (
                    <Link href={"/memories/viewer/" + index}>
                      <Image className="object-cover aspect-[4/3] rounded-lg border border-white border-opacity-25" width={480} height={360} key={index} src={image.default.src} alt={`Image ${index}`} />
                    </Link>
                  ))
                }
              </div>
            </>
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
    </>
  )
}
