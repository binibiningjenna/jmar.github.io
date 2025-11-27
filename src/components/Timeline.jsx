export default function Timeline({position, company, year}) {
  return (
    <>
      <div className="border-l-2 border-gray-300">
        <div className="ml-4">
          <div className="font-semibold text-gray-800">{position}</div>
          <div className="text-gray-500 text-sm pb-4">
            {company} <span className="text-gray-400 text-xs">• {year}</span>
          </div>
        </div>
      </div>
    </>
  );
}
