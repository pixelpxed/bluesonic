const displayImages = false

// import Link from "next/link";
import Image from "next/image";
import Link from "next/link";
import PageStoryHeader from "@/components/common/pagestoryheader"

export const metadata = {
  title: "Memories",
  desc: "รูปภาพ เป็นเครื่องมือในการเก็บความทรงจำที่มหัศจรรย์มากๆ ในทุกๆรูปภาพนั้น มีเรี่องราว อารมณ์ และทุกความรู้สึกซ่อนอยู่"
}

const albums = ["explore", "day1", "day2", "day3", "precamp"]

const precamp = require.context(`../../public/assets/img/memories/precamp`,  false,  /\.(png|jpe?g|svg)/)
const explore = require.context(`../../public/assets/img/memories/explore`,  false,  /\.(png|jpe?g|svg)/)
const day1 = require.context(`../../public/assets/img/memories/orientation-day1`,  false,  /\.(png|jpe?g|svg)/)
const day2 = require.context(`../../public/assets/img/memories/orientation-day2`,  false,  /\.(png|jpe?g|svg)/)
const day3 = require.context(`../../public/assets/img/memories/orientation-day3`,  false,  /\.(png|jpe?g|svg)/)

function Header(collection) {
  if (collection == "explore") {
    return (
      <div>
        <h1>ท่องแดนสวน​ฯ</h1>
        <p>
          วันแรกที่น้องได้เข้ามาค้นพบ ได้เรียนรู้สถานที่ในรั้วแห่งนี้ โดยมีพี่เลี้ยงสีตลอดทั้ง 6 สี
          มารับน้องถึงหน้าโรงเรียน และพาน้องเดินมาอยู่กับเพื่อนมีสี ซึ่งสีของเราก็คือสีน้ำเงิน
          <Link href='
            https://www.instagram.com/explore/tags/เม่นน้อยทะยานฟ้า/
          '>#เม่นน้อยทะบานฟ้า</Link>
          
        </p>
      </div>
    )
  }
}

export default async function Gallery() {
  function getImages(title, index) {

    const imageContext = [
      {
        collection: explore,
        title: "ท่องแดนสวน​ฯ",
        desc: " ได้ไปรับทราบเรื่องเอกสารและใบต่างๆ /รู้เรื่องกฏระเบียบวินัยเบื้องต้น / ได้เล่นเกมเพื่อให้น้องได้ทวนความทรงจำอย่างสนุกสนาน / ตำนานการเชียร์และแปรอักษรของโรงเรียนสวนกุหลาบแห่งนี้ / เรียนรู้ศึกษาประวัติศาสตร์ของตึกยาวและการให้เราได้รักกัน / การเรียนรู้วิทยาศาสตร์นอกห้องเรียนผ่านศูนย์ Open Lab"
      }, 
      {
        collection: day1,
        title: "ค่ายปฐมนิเทศ วันที่ 1",
        desc: ""
      }, 
      {
        collection: day2,
        title: "ค่ายปฐมนิเทศ วันที่ 2",
        desc: ""
      }, 
      {
        collection: day3,
        title: "ค่ายปฐมนิเทศ วันที่ 3",
        desc: ""
      }, 
      {
        collection: precamp,
        title: "Behind the Scenes",
        desc: ""
      } 
    ]

    const images = imageContext[index].collection.keys().map(
      title
    );

    var imagesHtml = images.map((image, index) => (
      <Image className="
        object-cover aspect-[4/3] rounded-lg border border-white 
        border-opacity-25 w-full" width={480} height={360} key={index} 
        src={image.default.src} alt={`Image ${index}`}
      />
    ))
    
    return (
      <div className="my-16 flex flex-col gap-4">
        {Header(albums[index])}
        <div className="
          grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1
        ">
          {imagesHtml}
        </div>
      </div>
    )
  }


  return (
    <div>
      {/* <PageStoryHeader 
        title="ภาพความทรงจำ"
        desc="
          รูปภาพ เป็นเครื่องมือในการเก็บความทรงจำที่มหัศจรรย์มากๆ ในทุกๆรูปภาพนั้น มีเรี่องราว 
          อารมณ์ และทุกความรู้สึกซ่อนอยู่ และพี่ๆเชื่อว่า น้องๆก็คงมีประสบการณ์ที่น้องจำ 
          และอยากเห็นอีกนะ พี่ๆ ได้ถ่ายรูปมาตลอดกิจกรรมเลย ลองดูนะ ชอบรูปไหนไหม น้องๆ
          สามารถเซฟรูป และเอาไปใช้ตามที่น้องอยากได้ ได้เลยนะ พี่ไม่ติดอะไรครับ :)
        "
      /> */}
      {
        displayImages ? (
          <>
            {
              albums.map((data, index) => (
                getImages(explore, index)
              ))
            }
          </>
        ) : (
          <div 
            className="flex h-screen"
            // className="
            //   col-span-1 bg-neutral-900 border border-neutral-800 
            //   rounded-lg px-4 py-8 my-8 text-center lg:col-span-3 md:col-span-2 
            //   sm:col-span-1
            // "
          >
            <div className="m-auto w-full max-w-[32rem]">
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">#เม่นน้อยทะยานฟ้า</h1>
                <p>
                  เก่งมากกที่หาสิ่งที่ฝังในบัตรเจอ น้องเม่นเร็วมาก ๆ เลยล่ะ สมกับเป็นเม่นสายฟ้ามาก
                  เร็วจนพี่ประมวลภาพยังไม่ทันเลย แห่ะ ๆ
                </p>
                <p>
                  พี่เม่นขอเวลาแปปนึงนะ เดี๋ยวพี่จะเอารูปภาพตลอดทั้งวันท่องแดนสวนฯ​ 
                  และค่ายปฐมนิเทศมาฝาก อดใจรอนะ ไม่นานหรอก!
                </p>
              </div>
              <Image src="/assets/img/sonic-yippie.gif" width={720} height={720} className="w-full rounded-lg bg-blue-300 p-8 mx-auto my-8" />
            </div>
          </div>
        )
      }
    </div>
  )
}
