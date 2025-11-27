export default function FeaturedCard({ title, description, link }) {
  return (
    <>
      <div className="flex items-center gap-2 mb-2 ">
        <div className="font-bold truncate">
          <a href={link} target="_blank" rel="noopener noreferrer" className="font-bold truncate hover:underline">
            {title}
          </a>
        </div>
        <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-0.5 rounded-full">Public</span>
      </div>
      <div className="text-sm text-gray-800 line-clamp-3 mb-3">{description}</div>
      <hr className="my-4 text-gray-400"></hr>
    </>
  );
}
