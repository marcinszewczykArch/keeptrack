import React, {useState} from 'react';
import {Project} from './Project';
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface ProjectListProps {
    projects: Project[];
    onSave: (project: Project) => void;
}

function ProjectList({projects, onSave}: ProjectListProps) {
    const [projectBeingEdited, setProjectBeingEdited] = useState({});
    const handleEdit = (project: Project) => {
        project === projectBeingEdited ? setProjectBeingEdited({}) : setProjectBeingEdited(project)
    }

    const handleSave = (project: Project) => {
        onSave(project)
        setProjectBeingEdited({})
    }
    const handleCancel = () => setProjectBeingEdited({})

    const items = projects.map(project => (
        <div key={project.id} className="cols-sm">
            {project === projectBeingEdited ? (
                <>
                    <ProjectCard project={project} onEdit={handleEdit}/>
                    <ProjectForm project={project} onSave={handleSave} onCancel={handleCancel}/>
                </>
            ) : (
                <ProjectCard project={project} onEdit={handleEdit}/>
            )}

        </div>
    ))


    return <div className="row">{items}</div>;
}


export default ProjectList;