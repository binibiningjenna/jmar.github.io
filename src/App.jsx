import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Menu } from "lucide-react";
import logo from "./img/logo_transparent.png";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Projects from "./pages/Projects";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-screen relative bg-gray-200">
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

        {/* MAIN CONTENT */}
        <main className="flex flex-col w-full lg:ml-64 overflow-y-auto bg-gray-200">
          <header className="lg:hidden bg-white p-4 border-b border-gray-200 sticky top-0 z-30 flex items-center justify-between">
            <img src={logo} alt="Logo" className="w-8 h-8" />
            <button onClick={() => setIsSidebarOpen(true)} className="p-2 rounded-xl text-gray-900 hover:bg-gray-100">
              <Menu size={24} />
            </button>
          </header>

          {/* ROUTES */}
          <div className="px-4 lg:px-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}
