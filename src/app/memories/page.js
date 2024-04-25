const displayImages = true

import Link from "next/link";
import Image from "next/image";
import PageStoryHeader from "@/components/common/pagestoryheader"

export const metadata = {
  title: "Memories",
  desc: "รูปภาพ เป็นเครื่องมือในการเก็บความทรงจำที่มหัศจรรย์มากๆ ในทุกๆรูปภาพนั้น มีเรี่องราว อารมณ์ และทุกความรู้สึกซ่อนอยู่"
}

const albums = ["precamp", "explore", "day1", "day2", "day3"]

export default async function Gallery() {
  function getImages(title, index) {
    const precamp = require.context(`../../../public/assets/img/memories/precamp`, false, /\.(png|jpe?g|svg)$/)
    const explore = require.context(`../../../public/assets/img/memories/explore`, false, /\.(png|jpe?g|svg)$/)
    const day1 = require.context(`../../../public/assets/img/memories/orientation-day1`, false, /\.(png|jpe?g|svg)$/)
    const day2 = require.context(`../../../public/assets/img/memories/orientation-day2`, false, /\.(png|jpe?g|svg)$/)
    const day3 = require.context(`../../../public/assets/img/memories/orientation-day3`, false, /\.(png|jpe?g|svg)$/)

    const imageContext = [
      {
        collection: precamp,
        title: "Behind the Scenes"
      }, 
      {
        collection: explore,
        title: "ท่องแดนสวน​ฯ"
      }, 
      {
        collection: day1,
        title: "ค่ายปฐมนิเทศ วันที่ 1"
      }, 
      {
        collection: day2,
        title: "ค่ายปฐมนิเทศ วันที่ 2"
      }, 
      {
        collection: day3,
        title: "ค่ายปฐมนิเทศ วันที่ 3"
      }, 
    ]

    console.log(imageContext[index].collection);
    const images = imageContext[index].collection.keys().map(imageContext[index].collection);

    var imagesHtml = images.map((image, index) => (
      <Image className="object-cover aspect-[4/3] rounded-lg border border-white border-opacity-25 w-full" width={480} height={360} key={index} src={image.default.src} alt={`Image ${index}`} />
    ))

    return (
      <div className="my-16 flex flex-col gap-4">
        <p className="font-bold">{imageContext[index].title}</p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {imagesHtml}
        </div>
      </div>
    )
  }


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
        {
          displayImages ? (
            <>
              {
                albums.map((data, index) => (
                  getImages(data, index)
                ))
              }
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
