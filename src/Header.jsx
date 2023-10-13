// Header.js

import React from 'react';

const Header = () => {
    return (
        <header className="bg-black border-white border-2 p-4 flex justify-between items-center">
            <h1 className="text-green-500 text-xl font-mono">Griffin Gore's Portfolio</h1>
            <nav>
                <ul className="flex gap-4">
                    <li><a href="#" className="text-green-500 border-white border-2 px-4 py-2 hover:bg-green-500 hover:text-black font-mono">Home</a></li>
                    <li><a href="#" className="text-green-500 border-white border-2 px-4 py-2 hover:bg-green-500 hover:text-black font-mono">About</a></li>
                    <li><a href="#" className="text-green-500 border-white border-2 px-4 py-2 hover:bg-green-500 hover:text-black font-mono">Services</a></li>
                    <li><a href="#" className="text-green-500 border-white border-2 px-4 py-2 hover:bg-green-500 hover:text-black font-mono">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
