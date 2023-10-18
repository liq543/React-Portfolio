import React from 'react';

const ResumeScreen = () => {
    return (
        <div className="container mx-auto px-4 py-4 md:py-16 lg:py-24 flex flex-col items-center justify-center min-h-screen pt-20 lg:pt-24">
            <div className="screen-content w-full md:w-3/4 lg:w-2/3 flex flex-col items-center">
                <h2 className="text-center text-green-500 font-mono text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 mt-16">My Resume</h2>

                <iframe 
                    src='./Griffin_Gore_Resume.pdf'
                    title="Griffin Gore's Resume" 
                    width="100%" 
                    height="75vh"  // Adjust this height based on how much of the viewport you want the resume to occupy.
                    className="border-none"
                    style={{ maxWidth: '100%', overflow: 'hidden' }}
                ></iframe>
                
                <div className="flex justify-center mt-8">
                    <a href='/Griffin_Gore_Resume.pdf' download target="_blank" rel="noopener noreferrer" className="text-green-500 font-mono text-xl md:text-2xl">
                        Download my resume
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ResumeScreen;
