import React, { useEffect, useState } from 'react';
import './LoadingTerminal.css';

const LoadingTerminal = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const targetText = "LOADING PORTFOLIO...";

    const [loadingComplete, setLoadingComplete] = useState(false); // Track if the "LOADING PORTFOLIO..." animation is complete
    const [progress, setProgress] = useState(0);
    const [loadingMessage, setLoadingMessage] = useState("");
    const loadingElements = ["Header", "Contact Info", "Projects", "Testimonials", "Footer", "CSS Styles", "Images", "Animations"];

    const animateLetter = (idx) => {
        const element = document.querySelector(`.terminal-letter[data-index="${idx}"]`);
        if (!element) return;

        const letter = element.dataset.value;

        if (letter === ' ') { // If space character, skip animation
            element.style.display = 'inline'; // Show the space character
            const nextIndex = idx + 1;
            setTimeout(() => animateLetter(nextIndex), 10); // Delay before animating next character
            return;
        }

        element.style.display = 'inline'; // Display the character

        let iteration = 0;

        const animation = () => {
            if (iteration < 5) {
                element.innerText = letters[Math.floor(Math.random() * 26)];
            } else {
                element.innerText = letter;
                clearInterval(interval);
                if (idx < targetText.length - 1) {
                    const nextIndex = idx + 1;
                    setTimeout(() => animateLetter(nextIndex), 10);
                } else {
                    setLoadingComplete(true); // Animation complete
                }
            }
            iteration++;
        };

        const interval = setInterval(animation, 10);
    };

    useEffect(() => {
        animateLetter(0);
    }, []);

    useEffect(() => {
        if (loadingComplete) {
            if (progress >= 100) {
                setProgress(100);
                setLoadingMessage("ERROR");
                return;
            }
            if (progress > 0 && progress < 100) {
                let index = Math.floor(progress / 12.5);
                setLoadingMessage(`Loading ${loadingElements[index]}...`);
            }
            const interval = setInterval(() => {
                setProgress(prev => prev + 12.5);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [loadingComplete, progress]);

    return (
<div className="terminal-container">
    <div className="container">
        <div className="screen-content">
            <div className="loading-display">
                {progress < 100 ? (
                    <h1 className="terminal-text">
                        {targetText.split("").map((char, idx) => (
                            <span 
                                key={idx} 
                                data-value={char}
                                data-index={idx}
                                className={idx === targetText.length - 1 ? "terminal-letter blink-cursor" : "terminal-letter"}
                            >
                                {char === ' ' ? ' ' : (loadingComplete ? char : letters[Math.floor(Math.random() * 26)])}
                            </span>
                        ))}
                    </h1>
                ) : (
                    <h1 className="error-text">ERROR</h1>
                )}
            </div>

            {progress > 0 && progress < 100 && (
                <div className="progress-container fade-in">
                    <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                    <div className="loading-message">{loadingMessage}</div>
                </div>
            )}

            {progress === 100 && <div className="error-message">Failed to load Portfolio, consider hiring Griffin to fix it.</div>}
        </div>
        <iframe className="screen" src="about:blank" title="CRT Screen"></iframe>
    </div>
</div>

    );
}

export default LoadingTerminal;
