const displayImages = true

import Image from "next/image";
import Header from "@/components/CollectionHeader"
import Link from "next/link";

// Collection Declairation
const precamp = require.context(`../../public/assets/img/memories/precamp`,  false,  /\.(png|jpe?g|svg)/)
const explore = require.context(`../../public/assets/img/memories/explore`,  false,  /\.(png|jpe?g|svg)/)
const day1 = require.context(`../../public/assets/img/memories/orientation-day1`,  false,  /\.(png|jpe?g|svg)/)
const day2 = require.context(`../../public/assets/img/memories/orientation-day2`,  false,  /\.(png|jpe?g|svg)/)
const day3 = require.context(`../../public/assets/img/memories/orientation-day3`,  false,  /\.(png|jpe?g|svg)/)

// Collection with String and Constant Types
const albums = ["explore", "day1", "day2", "day3", "precamp"]
const imageContext = [explore, day1, day2, day3, precamp]

const teachersNames = ["จรรยานุช", "มานิกา", "ณัฐวุฒิ", "จรรยพร", "วงดาว", "ธนภรณ์", "กุนนฑี"]
const newnormalNames = ["ภูมิใจ", "เฟย", "เต", "วอดก้า", "เชงเก้น", "คุณ", "ท็อป", "สตางค์", "ฌอน"]
const leicesterNames = [
  "ปัน", "ปอปอ", "เปรม", "ก้อง", "ต้นน้ำ", "ม่อน", "หลงเฟย", "อิคคิว", "ข้าวปั้น", 
  "ปอร์โต้", "กิต", "สมาร์ท", "โมกข์", "กร", "กัปตัน", "กู๊ด", "ยูโร", "โตโน่", "อาร์ตี้", 
  "เคิร์ฟ", "มิก", "กฤติ", "อะตอม", "ปีดี", "ไอน์สไตน์", "ต้นกล้า", "ว่านว่าน", "ปูนปั้น", "ปัน", 
  "พีซ", "ปัญญ์", "นีโอ", "ปุญโญ", "กาย", "อาร์ท", "เกล้า", "ตีตี้", "อั๊ช", "ภูมิ", "อิคคิว", 
  "มุนิ", "โบนัส", "ไดนอยด์", "ตุลย์", "เชน", "โชน", "เจแปน", "ปลื้ม", "พ็อฌ", "ไว", 
  "อาฟา", "มัสแตง", "ฟีนิกซ์", "เปรม", "ดีเดย์", "เลโอ", "เจ", "เตเต้", "พญา", "ซันนี่", 
  "อ๊อตโต้", "ฮิลล์", "วีซ่า", "โฟโต้", "กันต์", "เรือใบ", "ริวโอ", "ปุณ", "น้ำอุ่น", "อัยย์", 
  "จูเนียร์", "อิค", "ดิน", "ปันน้ำ", "ภีม", "นที"
]

function getImages(title, index) {
  const images = imageContext[index].keys().map(title);

  var imagesHtml = images.map((image, index) => (
    <Image 
      className="
        object-cover aspect-[4/3] border w-full h-full bg-neutral-900
      "
      width={480} height={360} key={index} 
      src={image.default.src} alt={`${albums[index]} #${index}`}
    />
  ))
  
  return (
    <div className="flex flex-col gap-4" id={albums[index]}>
      <div className="
        grid grid-cols-1 gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 
        sm:grid-cols-1 [&>*]:rounded-lg [&>*]:border-neutral-700
      ">
        <div className="
          bg-gradient-to-br from-blue-900 to-tranparent border 
          px-4 py-8 row-span-2 relative overflow-auto 
          
          xl:h-[calc((((((100vw-5rem)/4)/4)*3)*2)+1rem)]
          lg:h-[calc((((((100vw-4rem)/3)/4)*3)*2)+1rem)]
          md:h-[calc((((((100vw-3rem)/2)/4)*3)*2)+1rem)]
          sm:h-max
          h-max
          
        ">
          <div className="flex flex-col gap-4">
            {Header(albums[index], index)}
          </div>
          <div className="-z-10
            absolute top-0 left-0 h-full w-full 
            bg-[radial-gradient(white,transparent_1px)] 
            [background-size:24px_24px] opacity-25
          " />
        </div>
        {imagesHtml}
      </div>
    </div>
  )
}

export default async function Gallery() {
  return (
    <div>
      {
        displayImages ? (
          <div className="flex flex-col gap-8">
            <div className="relative">
              <Image 
                src="/assets/img/memories/groupphoto-soccer.jpg" 
                width={1920} 
                height={1080} 
                alt="รูปรวมสมาชิก #เม่นน้อยทะยานฟ้า" 
                className="rounded-lg border border-neutral-700 aspect-[16/6] object-cover"
              />
              <h1 className="absolute right-2 top-2 sm:top-4 sm:right-4 text-sm font-bold">#เม่นน้อยทะยานฟ้า</h1>
            </div>
            {
              albums.map((data, index) => (
                // console.log(imageContext[index], index)
                getImages(imageContext[index], index)
              ))
            }
            <p className="opacity-50 text-xs text-center">
              ขอขอบคุณความหมายชื่อรุ่นจากเพจ <Link target="_blank" href="https://www.facebook.com/sktranslator">
                <span>แปลภาษาเด็กสวนฯ</span>
              </Link> และรูปภาพค่ายบางส่วนจากเพจ <Link target="_blank" href="https://www.facebook.com/SuanSkit">
                <span>SK Innovation Gallery</span>
              </Link>
            </p>
          </div>
        ) : (
          <div className="flex h-screen">
            <div className="
              grid grid-cols-1 m-auto w-full max-w-[32rem] 
              place-items-center gap-0 lg:grid-cols-2 lg:max-w-[64rem] lg:gap-4
            ">
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
              <Image 
                src="/assets/img/sonic-yippie.gif" 
                width={720} 
                height={720} 
                className="w-full rounded-lg bg-blue-300 p-8 mx-auto my-8"
              />
            </div>
          </div>
        )
      }
    </div>
  )
}