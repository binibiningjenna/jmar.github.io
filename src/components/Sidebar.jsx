import { X, Home, User, Award, Briefcase, FileText, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../img/logo_transparent.png";
import profile from "../img/profile.jpg";
import Button from "./Button.jsx";

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const location = useLocation();

  const navItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "About", icon: User, path: "/about" },
    { name: "Achievements", icon: Award, path: "/achievements" },
    { name: "Projects", icon: Briefcase, path: "/projects" },
  ];

  return (
    <>
      {/* Background dim for mobile */}
      {isSidebarOpen && <div className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm lg:hidden" onClick={() => setIsSidebarOpen(false)} />}

      <aside
        className={`
          bg-white text-gray-900 fixed z-50 h-screen w-64 shadow-xl 
          transform transition-transform duration-300 p-6
          lg:h-[calc(100vh-2rem)] lg:ml-4 lg:my-4 lg:rounded-xl 
          lg:shadow-none lg:translate-x-0 flex flex-col justify-between
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full overflow-hidden">
          <div className="flex items-center justify-between lg:hidden mb-8">
            <img src={logo} alt="Logo" className="w-8 h-8" />

            <button onClick={() => setIsSidebarOpen(false)} className="p-2 rounded-full hover:bg-gray-100">
              <X size={24} />
            </button>
          </div>

          {/* Profile */}
          <div className="flex flex-col mb-4">
            <img src={profile} alt="Profile" className="w-30 h-30 rounded-full object-cover border-4 border-gray-300" />
            <h1 className="mt-4 text-xl font-bold">Jenna Miles Reyes</h1>
            <p className="text-sm text-gray-500">Front-End Developer</p>
            <Button icon={FileText}>Resume</Button>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-1 my-4 flex-grow">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => window.innerWidth < 1024 && setIsSidebarOpen(false)}
                  className={`
                    flex items-center p-3 rounded-xl transition
                    ${isActive ? "bg-gray-100 text-gray-900 font-semibold" : "text-gray-700 hover:bg-gray-100"}
                  `}
                >
                  <item.icon size={20} className="mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="mt-auto border-t pt-4 border-gray-200">
            <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-100">
              <div className="flex items-center">
                <Moon size={20} className="mr-3" />
                <span className="text-base">Dark Mode</span>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div
                  className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-gray-900
                    after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                    after:bg-white after:border after:border-gray-300 after:rounded-full
                    after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"
                ></div>
              </label>
            </div>

            <p className="mt-4 text-xs text-center text-gray-400">
              <strong>JM</strong> — © 2025
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
