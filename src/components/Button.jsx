export default function Button({ children, icon: Icon }) {
  return (
    <button className="mt-4  py-2 px-4 rounded-xl text-sm font-medium border border-gray-400 hover:bg-gray-100 flex items-center justify-center gap-2">
      {Icon && <Icon size={16} />}
      {children}
    </button>
  );
}
