import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate
} from "react-router-dom";

import Header from './Header';
import ContactScreen from './ContactScreen';
import LoadingTerminal from './LoadingTerminal';
import ProjectsScreen from './ProjectScreen';
import Home from './Home'; // Make sure to import the Home component you've created
import ResumeScreen from './ResumeScreen';
import AboutMe from './AboutMe';

function MainContent() {
    const navigate = useNavigate();
    const [loadingComplete, setLoadingComplete] = useState(false);

    useEffect(() => {
        if (loadingComplete) {
            // Navigate to the Home page once loading is done
            navigate("/home");
        }
    }, [loadingComplete, navigate]);

    return (
        <div className="App">
            <Header />
            <Routes>
                {loadingComplete ? (
                    <Route path="/" element={<Home />} />
                ) : (
                    <Route path="/" element={<LoadingTerminal setLoadingComplete={setLoadingComplete} />} />
                )}
                <Route path="/contact" element={<ContactScreen />} />
                <Route path="/projects" element={<ProjectsScreen />} />
                <Route path="/home" element={<Home />} />
                <Route path="/resume" element={<ResumeScreen />} />
                <Route path="/about" element={<AboutMe />} />
                {/* You can add more routes as needed */}
            </Routes>
        </div>
    );
}

function App() {
    return (
        <Router>
            <MainContent />
        </Router>
    );
}

export default App;
