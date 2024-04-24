export default function PageStoryHeader({ title, desc }) {
  return (
    <div className="my-16 max-w-[32rem]">
      <h1 className="text-4xl">{title}</h1>
      <p className="text-justify">{desc}</p>
    </div>
  )
}