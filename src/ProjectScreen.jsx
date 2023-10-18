import React from 'react';

const ProjectsScreen = () => {
    const projects = [
        { 
            title: 'Symposium',
            description: 'Music Player App / Royalty Free Streaming Service',
            imageUrl: '/symposium.png',
            link: 'https://github.com/liq543/symposium',
            deployedLink: 'https://symposium-new-6f0bf4e41ecb.herokuapp.com/'
        },
        { 
            title: 'Is My Park Safe?',
            description: 'Checks the crime rate of parks in Austin, Texas.',
            imageUrl: '/Park-Safe.png',
            link: 'https://github.com/liq543/Park-Safe',
            deployedLink: 'https://liq543.github.io/Park-Safe/'
        }
    ];

    return (
        <div className="container mx-auto px-4 py-4 md:py-16 lg:py-24 flex flex-col items-center justify-center min-h-screen pt-20 lg:pt-24">
            <iframe className="screen mb-4 md:mb-8 w-full h-auto" title="Projects Screen"></iframe>
            
            <div className="screen-content mt-4 w-full md:w-3/4 lg:w-2/3">
                <h2 className="text-center text-green-500 font-mono text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 mt-16">My Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <a 
                        key={index}
                        href={project.deployedLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-black text-green-500 border-white border-2 p-3 font-mono text-sm md:text-base lg:text-lg transform transition-transform duration-300 hover:scale-105 relative"
                    >
                        <img src={project.imageUrl} alt={`${project.title} screenshot`} className="mb-2 w-full h-auto"/>
                        <h3 className="font-bold">{project.title}</h3>
                        <p>{project.description}</p>
                        
                        {/* GitHub Logo positioned at the bottom-right of the card */}
                        <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute text-3xl bottom-2 right-2 text-green-500 hover:text-white cursor-pointer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </a>
                ))}

                </div>

                <div className="flex justify-center mt-8">
                    <span className="text-green-500 font-mono text-xl md:text-2xl mr-4">And more here -></span>
                    <a href="https://github.com/liq543" target="_blank" rel="noopener noreferrer" className="text-4xl md:text-5xl">
                        <i className="fab fa-github text-green-500 hover:text-white"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectsScreen;
