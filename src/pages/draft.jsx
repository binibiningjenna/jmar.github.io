import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Award, Briefcase, FileText, Moon, Sun, MessageSquare } from 'lucide-react';

// --- Sidebar Component ---
const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, isDarkMode, setIsDarkMode }) => {
    // Listahan ng mga navigation item
    const navItems = [
        { name: 'Home', icon: Home, href: '#home' },
        { name: 'About', icon: User, href: '#about' },
        { name: 'Achievements', icon: Award, href: '#achievements' },
        { name: 'Projects', icon: Briefcase, href: '#projects' },
        { name: 'Blogs', icon: FileText, href: '#blogs' },
    ];

    const currentActive = 'About'; // Para gayahin kung alin ang active na link

    // Base styles
    const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-white';
    const textColor = isDarkMode ? 'text-gray-100' : 'text-gray-900';
    const linkHover = isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100';
    const activeLink = isDarkMode ? 'bg-gray-800 text-white font-semibold' : 'bg-gray-100 text-gray-900 font-semibold';
    const inactiveLink = isDarkMode ? 'text-gray-400' : 'text-gray-700';

    return (
        <>
            {/* Overlay para sa Mobile View kapag bukas ang menu. Ginamit ang backdrop-blur at opacity. */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-40 lg:hidden bg-black/30 backdrop-blur-sm transition-all duration-300"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Main Sidebar - FIXED at ROUNDED. Inayos ang height calculation at padding/margin. */}
            <aside
                className={`
                    ${bgColor} ${textColor}
                    fixed z-50 h-screen w-64 transform transition-transform duration-300 ease-in-out p-6
                    shadow-xl lg:shadow-none lg:h-[calc(100vh-2rem)] lg:my-4 lg:ml-4 lg:rounded-xl
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                    lg:translate-x-0 lg:w-64 lg:flex-shrink-0 flex flex-col justify-between
                `}
            >
                {/* Top Content (Profile and Nav) - Ginawa itong flex-col at pinigilan ang pag-scroll. */}
                <div className="flex flex-col h-full overflow-hidden">
                    {/* Header at Close Button (Mobile Only) */}
                    <div className="flex items-center justify-between lg:hidden mb-8 flex-shrink-0">
                        <h2 className="text-xl font-bold">Portfolio</h2>
                        <button
                            onClick={() => setIsSidebarOpen(false)}
                            className={`p-2 rounded-full ${linkHover}`}
                            aria-label="Isara ang menu"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Profile Section (Mock) - Tiyakin ang 'rounded-full' at tamang size. Inayos ang mb-6 to mb-4. */}
                    <div className="flex flex-col items-center mb-4 text-center flex-shrink-0">
                        <div className="relative">
                            <img
                                src="https://placehold.co/100x100/A1A1AA/FFFFFF?text=MA"
                                alt="Mark Allen C. Nizal"
                                className="w-24 h-24 rounded-full object-cover border-4 border-gray-300"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/A1A1AA/FFFFFF?text=MA" }}
                            />
                        </div>
                        <h1 className="mt-4 text-xl font-bold leading-tight">Mark John Allen C. Nizal</h1>
                        <p className="text-sm text-gray-500">Front-End Developer</p>
                        <button className={`mt-4 w-full py-2 px-4 rounded-xl text-sm font-medium border transition ${isDarkMode ? 'border-gray-600 hover:bg-gray-800' : 'border-gray-400 hover:bg-gray-100'}`}>
                            <FileText size={16} className="inline mr-2" /> Resume
                        </button>
                    </div>

                    {/* Navigation Links - Inayos ang space-y at margin. */}
                    <nav className="space-y-1 my-4 flex-grow">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => window.innerWidth < 1024 && setIsSidebarOpen(false)} // Isara ang menu sa mobile pagkatapos mag-click
                                className={`
                                    flex items-center p-3 rounded-xl transition duration-150
                                    ${item.name === currentActive ? activeLink : `${inactiveLink} ${linkHover}`}
                                `}
                            >
                                <item.icon size={20} className="mr-3" />
                                <span className="text-base">{item.name}</span>
                            </a>
                        ))}
                    </nav>

                    {/* Dark Mode Toggle at Footer - Flex-shrink-0 para laging nasa baba. Tinitiyak na kasya at hindi nag-s-scroll. */}
                    <div className="mt-auto border-t pt-4 border-gray-200/50 flex-shrink-0">
                        {/* Dark Mode Toggle - Visible sa mobile at desktop sidebar */}
                        <div className={`flex items-center justify-between p-3 rounded-xl ${linkHover}`}>
                            <div className="flex items-center">
                                {isDarkMode ? <Sun size={20} className="mr-3 text-yellow-400" /> : <Moon size={20} className="mr-3" />}
                                <span className="text-base">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    value=""
                                    className="sr-only peer"
                                    checked={isDarkMode}
                                    onChange={() => setIsDarkMode(!isDarkMode)}
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gray-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-900"></div>
                            </label>
                        </div>

                        <p className="mt-4 text-xs text-center text-gray-400">
                            <span className='font-bold'>Simple Branding</span> - All rights reserved. © 2025
                        </p>
                    </div>
                </div>
            </aside>
        </>
    );
};

// --- Content Card Component ---
const ContentCard = ({ title, icon: Icon, children, isDarkMode }) => {
    const bgColor = isDarkMode ? 'bg-gray-800' : 'bg-white';
    const textColor = isDarkMode ? 'text-gray-100' : 'text-gray-900';
    const borderColor = isDarkMode ? 'border-gray-700' : 'border-gray-200';

    return (
        // Standardized padding (p-6) at rounded corners (rounded-2xl)
        <div className={`${bgColor} ${textColor} p-6 rounded-2xl shadow-lg border ${borderColor} transition duration-300`}>
            <div className="flex items-center mb-4 border-b pb-3 border-gray-200/20">
                <Icon size={24} className="mr-3" />
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
            {children}
        </div>
    );
};

// --- Main App Component ---
const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // I-sync ang dark mode sa <body> class at tiyakin na HINDI mag-s-scroll ang body sa desktop.
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        // Itulak ang scrollbar sa main content area, hindi sa <body>
        document.body.style.backgroundColor = isDarkMode ? '#1F2937' : '#F3F4F6';
        document.body.style.overflow = 'hidden'; // Pigilan ang body scroll
    }, [isDarkMode]);

    const headerBg = isDarkMode ? 'bg-gray-900' : 'bg-white';
    const headerBorder = isDarkMode ? 'border-gray-700' : 'border-gray-200';
    const mainBg = isDarkMode ? 'bg-gray-800' : 'bg-gray-100';

    const containerPadding = 'p-4 sm:p-6'; 
    
    return (
        // Ginawa ang buong container na h-screen at flex para sa fixed sidebar at scrollable main content
        <div className="flex h-screen antialiased relative">
            {/* Sidebar (Fixed Position) */}
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
            />

            {/* Main Content Area - Dinagdagan ang padding sa desktop (lg:p-6) para mas malawak ang espasyo */}
            <main className={`flex flex-col w-full lg:ml-64 overflow-y-auto ${mainBg}`}>
                {/* Responsive Header (Mobile only) - Ginawang sticky para laging makita ang menu button */}
                <header className={`lg:hidden ${headerBg} p-4 border-b ${headerBorder} sticky top-0 z-30 flex items-center justify-between`}>
                    <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        M.J.A.C.N. Portfolio
                    </h1>
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className={`p-2 rounded-xl ${isDarkMode ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-100'}`}
                        aria-label="Buksan ang menu"
                    >
                        <Menu size={24} />
                    </button>
                </header>

                {/* Scrollable Content - Ginawang lg:p-6 ang padding sa desktop para sa mas malawak na whitespace */}
                <div className={`flex-1 transition duration-300 ${containerPadding} lg:p-6`}> 
                    <div className="max-w-7xl mx-auto space-y-6">

                        {/* Top Banner and Floating Profile Section - GUMAYA SA FB/VERCEL DESIGN */}
                        <div className={`
                            relative h-auto rounded-2xl shadow-xl border 
                            ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}
                        `}>
                            {/* Cover Photo Area - 48 height (h-48) */}
                            <div className="relative h-48 rounded-t-2xl overflow-hidden">
                                <img
                                    src="https://placehold.co/1200x400/27272A/FFFFFF?text=Coding+Setup+Background"
                                    alt="Cover Photo"
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1200x400/27272A/FFFFFF?text=Coding+Setup+Background" }}
                                />
                                {/* Blue border overlay sa gilid */}
                                <div className="absolute inset-0 border-b-4 border-blue-100/30"></div>
                            </div>
                            
                            {/* Profile Info and Floating Picture Section */}
                            <div className="p-6 pt-0 flex flex-col sm:flex-row items-start">
                                {/* FLOATING PROFILE PICTURE - Inalis ang overflow-hidden sa parent ng image para hindi maputol ang border/shadow */}
                                <div className="relative -mt-16 sm:-mt-10 mr-4 mb-4 sm:mb-0 flex-shrink-0">
                                    <img
                                        src="https://placehold.co/120x120/A1A1AA/FFFFFF?text=MA"
                                        alt="Profile"
                                        className={`
                                            w-32 h-32 rounded-full object-cover border-4 
                                            ${isDarkMode ? 'border-gray-800' : 'border-white'}
                                            shadow-lg 
                                            transition duration-300
                                        `}
                                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/120x120/A1A1AA/FFFFFF?text=MA" }}
                                    />
                                </div>
                                
                                {/* Name and Button Area */}
                                <div className="flex-1 mt-4 sm:mt-0 pt-0 sm:pt-4">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Mark John Allen C. Nizal</h3>
                                    <p className="text-base text-gray-500">Front-End Developer</p>
                                    
                                    <button className={`
                                        mt-4 py-2 px-6 rounded-xl text-sm font-medium border transition 
                                        ${isDarkMode 
                                            ? 'border-gray-600 hover:bg-gray-700 text-white' 
                                            : 'border-gray-400 hover:bg-gray-100 text-gray-900'}
                                    `}>
                                        <MessageSquare size={16} className="inline mr-2" /> Message
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Main Content Grid - Tiyakin ang tamang pt-6 para hindi mag-overlap sa floating profile name */}
                        {/* DINAGDAGAN NG MT-6 SA GRID PARA HINDI MAGDIKIT SA PROFILE CARD */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6 mt-6"> 
                            {/* Left Column (Main content area) */}
                            <div className="lg:col-span-2 space-y-6">

                                {/* About Card */}
                                <ContentCard title="About" icon={User} isDarkMode={isDarkMode}>
                                    <p className="text-gray-500 text-base leading-relaxed">
                                        I am a Front-End Developer with strong design sensibilities and a track record of building web applications from scratch — turning abstract requirements into polished, performant, and user friendly interfaces. I specialize in React and modern JavaScript ecosystems.
                                    </p>
                                    <a href="#more" className={`mt-3 block text-sm font-medium ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}>See more</a>
                                </ContentCard>

                                {/* Featured / Projects Card */}
                                <ContentCard title="Featured Projects" icon={Briefcase} isDarkMode={isDarkMode}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {/* Project 1 Mock */}
                                        <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} hover:shadow-md transition duration-200`}>
                                            <h4 className="font-semibold">E-Commerce Platform</h4>
                                            <p className="text-xs text-gray-500 mt-1">Full-stack React/Node.js application.</p>
                                        </div>
                                        {/* Project 2 Mock */}
                                        <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} hover:shadow-md transition duration-200`}>
                                            <h4 className="font-semibold">Data Visualization Tool</h4>
                                            <p className="text-xs text-gray-500 mt-1">Built with D3.js and React.</p>
                                        </div>
                                    </div>
                                </ContentCard>
                            </div>

                            {/* Right Column (Side content area) */}
                            <div className="lg:col-span-1 space-y-6">

                                {/* Education Card */}
                                <ContentCard title="Education" icon={Award} isDarkMode={isDarkMode}>
                                    <div className="space-y-4">
                                        <div className="border-b pb-3 border-gray-200/20">
                                            <h4 className="font-semibold">BSc in Information Technology</h4>
                                            <p className="text-sm text-gray-500">Asian Institute of Technology & Education</p>
                                            <p className="text-xs text-gray-400">GWA: 1.28 / 1.00 | Jun 2020 - Jun 2024</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">TVL - Computer System Servicing</h4>
                                            <p className="text-sm text-gray-500">San Antonio National High School</p>
                                            <p className="text-xs text-gray-400">GWA: 92 / 100 | Jun 2018 - Mar 2020</p>
                                        </div>
                                    </div>
                                </ContentCard>

                                {/* Experience Card */}
                                <ContentCard title="Experience" icon={Briefcase} isDarkMode={isDarkMode}>
                                    <h4 className="font-semibold">Front-End Developer</h4>
                                    <p className="text-sm text-gray-500">ParallelQuantum Corp.</p>
                                    <p className="text-xs text-gray-400">Oct 2025 - Present</p>
                                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                                        Build and optimize interactive web-based game applications from scratch, turning concepts into production-ready products.
                                    </p>
                                </ContentCard>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;