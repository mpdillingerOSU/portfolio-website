import React, { useEffect, useState } from 'react';
import { highlightNavButton, backToTop } from '../scripts/NavigationActions';
import { projectList } from '../data/ProjectData';
import ProjectContainer from '../components/ProjectContainer';
import SelectionInput from '../components/SelectionInput';
import SortDirectionToggle from '../components/SortDirectionToggle';
import LanguageFilter from '../components/LanguageFilter';
import TechnologyFilter from '../components/TechnologyFilter';
import AppFooter from '../components/AppFooter';

function ProjectsPage() {
    const [sortType, setSortType] = useState("featured");
    const [isSortInversed, setIsSortInversed] = useState(false);
    const [activeLanguages, setActiveLanguages] = useState(
        {
            "HTML": true,
            "CSS": true,
            "Javascript": true,
            "Java": true,
            "SQL": true,
            "Dart": true
        }
    );
    const [activeTechnologies, setActiveTechnologies] = useState(
        {
            "React": true,
            "Next.js": true,
            "Spring": true,
            "VS Code": true,
            "Flutter": true,
            "IntelliJ": true,
            "MySQL": true,
            "Git": true
        }
    );
    const [projects, setProjects] = useState([...projectList]);

    useEffect(() => {
        highlightNavButton("projects");
        backToTop();
    }, []);

    const projectHasLanguage = (project) => {
        for(let language of project.languages){
            if(activeLanguages[language]){
                return true;
            }
        }

        return false;
    }

    const projectHasTechnology = (project) => {
        for(let technology of project.technologies){
            if(activeTechnologies[technology]){
                return true;
            }
        }

        return false;
    }

    useEffect(() => {
        const newProjects = [];

        for(let project of projectList){
            if(projectHasLanguage(project) && projectHasTechnology(project)){
                newProjects.push(project);
            }
        }
        
        if(sortType === "featured"){
            if(isSortInversed){
                newProjects.sort((a, b) => b.index - a.index);
            } else {
                newProjects.sort((a, b) => a.index - b.index);
            }
        } else if(sortType === "alphabetic"){
            if(isSortInversed){
                newProjects.sort((a, b) => b.name.localeCompare(a.name));
            } else {
                newProjects.sort((a, b) => a.name.localeCompare(b.name));
            }
        } else if(sortType === "skills"){
            if(isSortInversed){
                newProjects.sort((a, b) => a["skills"].length - b["skills"].length);
            } else {
                newProjects.sort((a, b) => b["skills"].length - a["skills"].length);
            }
        } else if(sortType === "languages"){
            if(isSortInversed){
                newProjects.sort((a, b) => a["languages"].length - b["languages"].length);
            } else {
                newProjects.sort((a, b) => b["languages"].length - a["languages"].length);
            }
        } else if(sortType === "technologies"){
            if(isSortInversed){
                newProjects.sort((a, b) => a["technologies"].length - b["technologies"].length);
            } else {
                newProjects.sort((a, b) => b["technologies"].length - a["technologies"].length);
            }
        }

        setProjects(newProjects);
    }, [sortType, isSortInversed, activeLanguages, activeTechnologies]);

    const updateSortType = (type) => {
        setSortType(type);
    }

    const updateSortDirection = (isInversed) => {
        setIsSortInversed(isInversed);
    }

    return (
        <div id="projects-page" className="page">
            <div className="sort-and-filters-section">
                <div className="sort-section">
                    <div className="input-container">
                        <span className="input-lead-text">Sort</span>
                        <SelectionInput options={[["featured", "Featured"], ["alphabetic", "Alphabetic"], ["skills", "# of Skills"], ["languages", "# of Languages"], ["technologies", "# of Technologies"]]} value={["featured", "Featured"]} onChange={(val) => updateSortType(val)} />
                    </div>
                    <SortDirectionToggle isOn={isSortInversed} onToggle={(val) => updateSortDirection(val)} />
                </div>
                <div className="sort-section">
                    <LanguageFilter activeLanguages={activeLanguages} onChange={(activeLanguages) => setActiveLanguages(activeLanguages)} />
                </div>
                <div className="sort-section">
                    <TechnologyFilter activeTechnologies={activeTechnologies} onChange={(activeTechnologies) => setActiveTechnologies(activeTechnologies)} />
                </div>
            </div>
            <div className="projects-page-filter-underline" />
            {projects.length > 0 ? (
                <div className="projects-list">
                    {Array.from({ length: projects.length }, (_, i) => (
                        <ProjectContainer key={i} projectID={projects[i].projectID} />
                    ))}
                </div>
            ) : (
                <span>No projects fit the specified filters.</span>
            )}
            <AppFooter />
        </div>
    );
}

export default ProjectsPage;