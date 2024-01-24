import React, {useState} from "react";
import {MOCK_PROJECTS} from "./MockProjects";
import ProjectList from "./ProjectList";
import {Project} from "./Project";

function ProjectsPage() {

    const [projects, setProjects] = useState(MOCK_PROJECTS);
    const saveProject = (project: Project) => {
        console.log('Saving project: ', project);
        let updatedProjects = projects.map(item => item.id === project.id ? project : item);
        setProjects(updatedProjects)
    }

    return (
        <>
            <h1>Projectsss</h1>
            <ProjectList projects={projects} onSave={saveProject}/>
        </>
    );
}

export default ProjectsPage;

