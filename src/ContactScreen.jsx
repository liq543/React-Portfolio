import React from 'react';

const ContactScreen = () => {
  return (
    <div className="crt flex flex-col items-center justify-center min-h-screen px-4">
      <h2 className="text-white font-mono text-4xl md:text-6xl mb-10 text-center">Let's Connect</h2>
      
      <div className="flex space-x-4 md:space-x-8 text-4xl md:text-6xl lg:text-8xl">
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

      <p className="text-white text-xl md:text-2xl text-center mt-10">
        Feel free to connect with me on social media or send me an email. I'm always open to making new connections and exploring opportunities.
      </p>
    </div>
  );
};

export default ContactScreen;
