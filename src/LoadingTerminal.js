import React, { useEffect, useState } from 'react';
import './LoadingTerminal.css';

const LoadingTerminal = ({onLoadingComplete}) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const doneText = "DONE!";
    const targetText = "LOADING PORTFOLIO...";

    const [currentText, setCurrentText] = useState(targetText);
    const [loadingComplete, setLoadingComplete] = useState(false);
    const [progress, setProgress] = useState(0);
    const [loadingMessage, setLoadingMessage] = useState("");
    const loadingElements = ["Header", "Contact Info", "Projects", "Resume", "Elements", "CSS Styles", "Images", "Animations"];
    const [fadeOut, setFadeOut] = useState(false);

    const animateLetter = (idx, target) => {
        const element = document.querySelector(`.terminal-letter[data-index="${idx}"]`);
        if (!element) return;

        const letter = target[idx];

        if (letter === ' ') {
            element.style.display = 'inline';
            const nextIndex = idx + 1;
            setTimeout(() => animateLetter(nextIndex, target), 10);
            return;
        }

        element.style.display = 'inline';

        let iteration = 0;

        const animation = () => {
            if (iteration < 5) {
                element.innerText = letters[Math.floor(Math.random() * 26)];
            } else {
                element.innerText = letter;
                clearInterval(interval);
                if (idx < target.length - 1) {
                    const nextIndex = idx + 1;
                    setTimeout(() => animateLetter(nextIndex, target), 10);
                } else if (target === targetText) {
                    setLoadingComplete(true);
                    setTimeout(() => {
                        setCurrentText(doneText);
                        animateLetter(0, doneText);
                    }, 1000);
                } else if (target === doneText) {
                    setTimeout(() => {
                        setFadeOut(true);
                        setLoadingComplete(true);  // This is the change
                    }, 1000);
                }
            }
            iteration++;
        };

        const interval = setInterval(animation, 5);
    };

    useEffect(() => {
        animateLetter(0, currentText);
    }, [currentText]);

    useEffect(() => {
        if (loadingComplete && currentText === targetText) {
            if (progress >= 100) {
                setProgress(100);
                setLoadingMessage("DONE!");
                setTimeout(() => {
                    window.location.href = '/home';  // Navigate to home after loading is done
                }, 1000);
                return;
            }
            if (progress > 0 && progress < 100) {
                let index = Math.floor(progress / 12.5);
                setLoadingMessage(`Loading ${loadingElements[index]}...`);
            }
            const interval = setInterval(() => {
                setProgress(prev => prev + 12.5);
            }, 100);

            return () => clearInterval(interval);
        }
    }, [loadingComplete, progress, currentText]);

    return (
        <div className="terminal-container">
            <div className="container">
                <div className="screen-content" style={fadeOut ? { opacity: 0, transition: 'opacity 1s ease-out' } : {}}>
                    <div className="loading-display">
                        <h1 className="terminal-text">
                            {currentText.split("").map((char, idx) => (
                                <span 
                                    key={idx} 
                                    data-value={char}
                                    data-index={idx}
                                    className={idx === currentText.length - 1 ? "terminal-letter blink-cursor" : "terminal-letter"}
                                >
                                    {char === ' ' ? ' ' : (loadingComplete && char === currentText[idx] ? char : letters[Math.floor(Math.random() * 26)])}
                                </span>
                            ))}
                        </h1>
                    </div>

                    {progress > 0 && progress < 100 && (
                        <div className="progress-container fade-in">
                            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                            <div className="loading-message">{loadingMessage}</div>
                        </div>
                    )}
                </div>
                <iframe className="screen" src="about:blank" title="CRT Screen"></iframe>
            </div>
        </div>
    );
}

export default LoadingTerminal;
