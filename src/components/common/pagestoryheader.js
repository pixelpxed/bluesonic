export default function PageStoryHeader({ title, desc }) {
  return (
    <div className="mt-ค max-w-[32rem]">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>{desc}</p>
    </div>
  )
}