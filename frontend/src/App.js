import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import NavigationBar from './components/NavigationBar';
import ProjectsPage from './pages/ProjectsPage';

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <Router>
                    <NavigationBar />
                    <Routes>
                        <Route path="/" element={<WelcomePage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                    </Routes>
                </Router>
            </header>
        </div>
    );
}

export default App;
