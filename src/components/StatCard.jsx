export default function StatCard({ icon: Icon, title, value }) {
  return (
    <div className="bg-white p-2 lg:p-4 rounded-lg shadow flex items-center space-x-2 hover:bg-gray-100 transition-colors duration-200 group">
      <div className="bg-gray-100 p-2 lg:p-3 rounded-full group-hover:bg-white transition-colors duration-200">
        {Icon && <Icon className="h-6 w-6 text-gray-900" />}
      </div>
      <div>
        <p className="text-gray-800 text-sm">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}
