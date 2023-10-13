// App.js

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Header from './Header';
import ContactScreen from './ContactScreen';
import LoadingTerminal from './LoadingTerminal';
import ProjectsScreen from './ProjectScreen';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<LoadingTerminal />} />
                    <Route path="/contact" element={<ContactScreen />} />
                    <Route path="/projects" element={<ProjectsScreen />} />
                    {/* You can add more routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
