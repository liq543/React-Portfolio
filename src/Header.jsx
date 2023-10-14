import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => {
            return !prevState;
        });
    };
    

    return (
    <header className="bg-black border-white border-2 p-4 flex justify-between items-center z-50 fixed crt">
            <h1 className="text-green-500 text-xl font-mono">Griffin Gore's Portfolio</h1>

            <nav className="hidden lg:block">
                <ul className="flex gap-4">
                    <li><Link to="/" className="text-green-500 border-white border-2 px-4 py-2 hover:bg-green-500 hover:text-black font-mono">Home</Link></li>
                    <li><Link to="/projects" className="text-green-500 border-white border-2 px-4 py-2 hover:bg-green-500 hover:text-black font-mono">Projects</Link></li>
                    <li><Link to="/resume" className="text-green-500 border-white border-2 px-4 py-2 hover:bg-green-500 hover:text-black font-mono">Resume</Link></li>
                    <li><Link to="/about" className="text-green-500 border-white border-2 px-4 py-2 hover:bg-green-500 hover:text-black font-mono">About Me</Link></li>
                    <li><Link to="/contact" className="text-green-500 border-white border-2 px-4 py-2 hover:bg-green-500 hover:text-black font-mono">Contact</Link></li>
                </ul>
            </nav>
            
            <button onClick={toggleMenu} className="lg:hidden text-green-500 font-mono z-60">
                ☰
            </button>

            {menuOpen && (
                <div className="fixed top-16 right-4 lg:hidden bg-black border-white border-2 p-4 w-48 z-10">
                    <ul className="flex flex-col gap-4">
                        <li><Link to="/" onClick={toggleMenu} className="text-green-500 border-white border-2 px-4 py-2 hover:bg-green-500 hover:text-black font-mono block z-10">Home</Link></li>
                        <li><Link to="/projects" onClick={toggleMenu} className="text-green-500 border-white border-2 px-4 py-2 hover:bg-green-500 hover:text-black font-mono block z-10">Projects</Link></li>
                        <li><Link to="/resume" onClick={toggleMenu} className="text-green-500 border-white border-2 px-4 py-2 hover:bg-green-500 hover:text-black font-mono block z-10">Resume</Link></li>
                        <li><Link to="/about" onClick={toggleMenu} className="text-green-500 border-white border-2 px-4 py-2 hover:bg-green-500 hover:text-black font-mono block z-10">About Me</Link></li>
                        <li><Link to="/contact" onClick={toggleMenu} className="text-green-500 border-white border-2 px-4 py-2 hover:bg-green-500 hover:text-black font-mono block z-0">Contact</Link></li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;
