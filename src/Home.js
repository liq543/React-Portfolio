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
      className="crt flex flex-col items-center justify-center min-h-screen"
      style={{ opacity }}
    >
      <div className="screen mb-4 md:mb-8 w-full h-auto"></div>

      <div className="text-center mt-4 w-full md:w-3/4 lg:w-2/3">
        <h1 className="text-white font-mono text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
          Hi, I'm Griffin. Your Full Stack Web Developer<span>.</span>
        </h1>
        <p className="text-white font-mono text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6">
          Click the links in the header to learn more about me<span>.</span>
        </p>
      </div>

      <div className="flex justify-center items-center space-x-4 md:space-x-8 text-6xl mt-4">
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

      {/* Extra spacing adjusted */}
      <div className="pb-4"></div>  
    </div>
  );
}

export default Home;
