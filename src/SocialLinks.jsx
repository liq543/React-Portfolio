// src/components/SocialLinks.js
import React from 'react';

const SocialLinks = () => {
    return (
        <div className="flex space-x-4 md:space-x-8 text-xl md:text-2xl">
            <a href="https://github.com/liq543" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github text-green-500 hover:text-white"></i>
            </a>
            <a href="mailto:griffingore97@gmail.com">
                <i className="fas fa-envelope text-green-500 hover:text-white"></i>
            </a>
            <a href="https://www.linkedin.com/in/griffin-gore/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin text-green-500 hover:text-white"></i>
            </a>
        </div>
    );
}

export default SocialLinks;
