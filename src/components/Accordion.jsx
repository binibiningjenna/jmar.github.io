import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Collapse({ label, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border-b border-gray-200">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-2">
        <span className="font-semibold text-sm text-gray-700">{label}</span>
        {open ? (
          <ChevronUp size={18} className="text-gray-600" />
        ) : (
          <ChevronDown size={18} className="text-gray-600" />
        )}
      </button>
      <hr className="text-gray-200"></hr>

      {open && <div className="px-4 py-4 text-gray-500 text-sm">{children}</div>}
    </div>
  );
}
