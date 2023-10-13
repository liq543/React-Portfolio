import React, { useState } from 'react';

const ContactScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const fullMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
        // Here, you can use a service or backend API to send the email.
        console.log(fullMessage); // For testing purposes
    };

    return (
        <div className="container mx-auto px-4 py-1 md:py-20 flex flex-col items-center justify-center h-screen">
            <iframe className="screen mb-4 md:mb-8" title="Contact Screen"></iframe>
            <div className="screen-content mt-4 flex flex-col items-center w-full md:w-1/2 lg:w-2/5">
                <h2 className="text-green-500 font-mono text-4xl md:text-5xl mb-6 md:mb-8">Contact Me</h2>
                <form className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
                    <input
                        className="bg-black text-green-500 border-white border-2 p-3 md:p-4 w-full font-mono mb-4 text-base md:text-lg"
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className="bg-black text-green-500 border-white border-2 p-3 md:p-4 w-full font-mono mb-4 text-base md:text-lg"
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        className="bg-black text-green-500 border-white border-2 p-3 md:p-4 w-full font-mono resize-y mb-6 md:mb-8 text-base md:text-lg"
                        rows="4"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button type="submit" className="text-green-500 border-white border-2 px-4 md:px-6 py-2 md:py-3 font-mono hover:bg-green-500 hover:text-black mb-6 md:mb-8 text-base md:text-lg">Send</button>
                </form>
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
            </div>
        </div>
    );
}

export default ContactScreen;
