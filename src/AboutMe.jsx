import React from 'react';

const AboutMe = () => {
    return (
        <div className="crt mx-auto px-4 py-4 md:py-16 lg:py-24 flex flex-col items-center justify-center min-h-screen pt-20 lg:pt-24">
            
            {/* Circular Image */}
            <img 
                src="griffin-img.jpg" 
                alt="Griffin's Portrait"
                className="mb-8 w-48 h-48 rounded-full border-white border-2 shadow-lg"
            />

            <div className="about-content w-full md:w-3/4 lg:w-2/3 text-center mt-8">  {/* Added mt-8 to provide space at the top */}
                <h1 className="text-white font-mono text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
                    About Me
                </h1>
                <p className="text-white font-mono text-lg md:text-xl lg:text-2xl mb-4 md:mb-6">
                    Hey there! I'm Griffin. My journey into the world of Full Stack Development began at the University of Texas at Austin. But before that, I was deep into Finance studies at Bauer College. While I cherish every academic lesson, I believe the real magic happens when theory meets the real world. That's probably why I co-founded an online business during my time at Bauer. It wasn't just a venture; it was a testament to my drive to apply what I learn.
                </p>
                <p className="text-white font-mono text-lg md:text-xl lg:text-2xl mb-4 md:mb-6">
                    But who am I outside of work and academics? Picture me strumming my guitar, crafting melodies, or whipping up a culinary masterpiece in the kitchen. Creativity for me isn't just a switch I turn off after work; it's woven into the fabric of who I am.
                </p>
                <p className="text-white font-mono text-lg md:text-xl lg:text-2xl">
                    Right now, I'm looking for an opportunity to blend my tech skills with my love for innovation in a Full Stack/Web Development role. Think we could be a good match? Let's chat and explore the possibilities!
                </p>
            </div>
        </div>
    );
}

export default AboutMe;
