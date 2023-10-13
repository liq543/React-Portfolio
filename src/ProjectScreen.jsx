import React from 'react';

const ProjectsScreen = () => {

    // Sample project data for illustration.
    const projects = [
        { 
            title: 'Symposium',
            description: 'Music Player App',
            imageUrl: '/symposium.png' // Replace with your image paths
        },
        { 
            title: 'Project 2',
            description: 'Description for Project 2',
            imageUrl: '/path/to/screenshot2.png'
        },
        { 
            title: 'Project 3',
            description: 'Description for Project 3',
            imageUrl: '/path/to/screenshot3.png'
        },
        { 
            title: 'Project 4',
            description: 'Description for Project 4',
            imageUrl: '/path/to/screenshot4.png'
        }
    ];

    return (
        <div className="container mx-auto px-4 py-1 md:py-20 flex flex-col items-center justify-center h-screen">
            <iframe className="screen mb-4 md:mb-8" title="Projects Screen"></iframe>
            <div className="screen-content mt-4 w-full md:w-3/4 lg:w-2/3">
                <h2 className="text-center text-green-500 font-mono text-4xl md:text-5xl mb-6 md:mb-8">My Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className="bg-black text-green-500 border-white border-2 p-3 font-mono text-base md:text-lg transform transition-transform duration-300 hover:scale-105"
                        >
                            <img src={project.imageUrl} alt={`${project.title} screenshot`} className="mb-2"/>
                            <h3 className="font-bold">{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>

                <div className="flex space-x-4 md:space-x-8 text-xl md:text-2xl mt-8 justify-center">
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

export default ProjectsScreen;
