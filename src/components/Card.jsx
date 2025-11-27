export default function Card({ icon: Icon, title, children }) {
  return (
    <div className="bg-white rounded-xl p-6 w-full shadow-sm border border-gray-100">
      <div className="flex items-center mb-4">
        {Icon && <Icon size={24} className="mr-2" />}
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
}
