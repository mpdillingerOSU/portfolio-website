import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import NavigationBar from './components/NavigationBar';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <Router>
                    <NavigationBar />
                    <Routes>
                        <Route path="/" element={<WelcomePage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </Router>
            </header>
        </div>
    );
}

export default App;
