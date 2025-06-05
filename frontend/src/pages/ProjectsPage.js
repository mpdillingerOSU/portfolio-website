import React, { useEffect, useState } from 'react';
import { highlightNavButton, backToTop } from '../scripts/NavigationActions';
import { initActiveSkills, initActiveLanguages, initActiveTechnologies, projectList } from '../data/ProjectData';
import ProjectContainer from '../components/ProjectContainer';
import SelectionInput from '../components/SelectionInput';
import SortDirectionToggle from '../components/SortDirectionToggle';
import SkillFilter from '../components/SkillFilter';
import LanguageFilter from '../components/LanguageFilter';
import TechnologyFilter from '../components/TechnologyFilter';
import AppFooter from '../components/AppFooter';
import SearchBar from '../components/SearchBar';

function ProjectsPage() {
    const [search, setSearch] = useState("");
    const [sortType, setSortType] = useState("featured");
    const [isSortInversed, setIsSortInversed] = useState(false);
    const [activeSkills, setActiveSkills] = useState(initActiveSkills());
    const [activeLanguages, setActiveLanguages] = useState(initActiveLanguages());
    const [activeTechnologies, setActiveTechnologies] = useState(initActiveTechnologies());
    const [projects, setProjects] = useState([...projectList]);

    useEffect(() => {
        highlightNavButton("projects");
        backToTop();
    }, []);

    const projectHasSearch = (project) => {
        return search === "" || project.name.toLowerCase().trim().replace(/\s+/g, " ").includes(search.toLowerCase().trim().replace(/\s+/g, " "));
    }

    const projectHasSkill = (project) => {
        for(let skill of project.skills){
            if(activeSkills[skill]){
                return true;
            }
        }

        return false;
    }

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
            if(projectHasSearch(project)
                && projectHasSkill(project)
                && projectHasLanguage(project)
                && projectHasTechnology(project)){
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
    }, [search, sortType, isSortInversed, activeSkills, activeLanguages, activeTechnologies]);

    const updateSortType = (type) => {
        setSortType(type);
    }

    const updateSortDirection = (isInversed) => {
        setIsSortInversed(isInversed);
    }

    return (
        <div id="projects-page" className="page">
            <div className="sort-and-filters-section">
                <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} onButtonClick={(e) => setSearch("")}/>
                <div className="sort-and-filters-subsection">
                    <div className="sort-section">
                        <div className="input-container">
                            <span className="input-lead-text">Sort</span>
                            <SelectionInput options={[["featured", "Featured"], ["alphabetic", "Alphabetic"], ["skills", "# of Skills"], ["languages", "# of Languages"], ["technologies", "# of Technologies"]]} value={["featured", "Featured"]} onChange={(val) => updateSortType(val)} />
                        </div>
                        <SortDirectionToggle isOn={isSortInversed} onToggle={(val) => updateSortDirection(val)} />
                    </div>
                    <div className="sort-section">
                        <SkillFilter activeSkills={activeSkills} onChange={(activeSkills) => setActiveSkills(activeSkills)} />
                    </div>
                </div>
                <div className="sort-and-filters-subsection">
                    <div className="sort-section">
                        <LanguageFilter activeLanguages={activeLanguages} onChange={(activeLanguages) => setActiveLanguages(activeLanguages)} />
                    </div>
                    <div className="sort-section">
                        <TechnologyFilter activeTechnologies={activeTechnologies} onChange={(activeTechnologies) => setActiveTechnologies(activeTechnologies)} />
                    </div>
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