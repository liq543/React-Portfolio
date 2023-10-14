import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpacity(1);
        }, 10); // slight delay to trigger transition
        return () => clearTimeout(timer);  // cleanup on component unmount
    }, []);

    return (
        <div 
            className="container mx-auto px-4 py-4 md:py-16 lg:py-24 flex flex-col items-center justify-center min-h-screen pt-20 lg:pt-24 transition-opacity duration-500 ease-in-out"
            style={{ opacity }}
        >
            <iframe className="screen mb-4 md:mb-8 w-full h-auto" title="Home Screen"></iframe>

            <div className="screen-content mt-4 w-full md:w-3/4 lg:w-2/3">
                <h1 className="text-center text-white font-mono text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 mt-16">
                    Hi, I'm Griffin, Your Full Stack Web Developer<span className="blinking-period">.</span>
                </h1>
                <p className="text-center text-white font-mono text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6">
                    Click the links in the header to learn more about me<span className="blinking-period">.</span>
                </p>
            </div>
        </div>
    );
}

export default Home;
