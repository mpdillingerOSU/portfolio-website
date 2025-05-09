import React, { useEffect, useState } from 'react';
import { highlightNavButton } from '../scripts/NavigationActions';
import { projectList } from '../data/ProjectData';
import ProjectContainer from '../components/ProjectContainer';
import SelectionInput from '../components/SelectionInput';

function ProjectsPage() {
    const [sortType, setSortType] = useState("featured");
    const [projects, setProjects] = useState([...projectList]);

    useEffect(() => {
        highlightNavButton("projects");
    }, []);

    const attributeCount = (project, attribute) => {
        const arr = [];
        for(let subproject of project.subprojects){
            for(let val of subproject[attribute]){
                if(!arr.includes(val)){
                    arr.push(val);
                }
            }
        }

        return arr.length;
    }

    const updateSortType = (type) => {
        setSortType(type);

        if(type === "featured"){
            projects.sort((a, b) => a.index - b.index);
        } else if(type === "alphabetic"){
            projects.sort((a, b) => a.name.localeCompare(b.name));
        } else if(type === "languages"){
            projects.sort((a, b) => attributeCount(b, "languages") - attributeCount(a, "languages"));
        } else if(type === "skills"){
            projects.sort((a, b) => attributeCount(b, "skills") - attributeCount(a, "skills"));
        }
    }

    return (
        <div id="projects-page" className="page">
            <div className="filters-section">
                <div className="input-container">
                    <span className="input-lead-text">Sort</span>
                    <SelectionInput options={[["featured", "Featured"], ["alphabetic", "Alphabetic"], ["languages", "# of Languages"], ["skills", "# of Skills"]]} value={["featured", "Featured"]} onChange={(val) => updateSortType(val)} />
                </div>
            </div>
            <div className="projects-list">
                {Array.from({ length: projects.length }, (_, i) => (
                    <ProjectContainer projectID={projects[i].projectID} />
                ))}
            </div>
        </div>
    );
}

export default ProjectsPage;