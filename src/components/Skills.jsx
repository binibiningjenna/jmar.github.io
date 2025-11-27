export default function Skills({ title, items }) {
  return (
    <>
      <div className="font-semibold text-md text-gray-800 my-3">{title}</div>
      <div className="flex flex-wrap items-center gap-2">
        {items.map((item) => (
          <div key={item} className="rounded-sm py-1 px-2 border border-gray-400 text-xs text-gray-800 hover:bg-gray-100">
            {item}
          </div>
        ))}
      </div>
    </>
  );
}
