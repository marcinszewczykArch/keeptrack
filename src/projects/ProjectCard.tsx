import {Project} from './Project';
import React, {useState} from 'react';

function formatDescription(description: string): string {
    return description.length > 60
        ?
        description.substring(0, 60) + '...'
        :
        description
}

interface ProjectCardProps {
    project: Project,
    onEdit: (project: Project) => void;
}

function ProjectCard(props: ProjectCardProps) {
    const {project, onEdit} = props;
    const [clicksNumber, setClicksNumber] = useState(0);

    const incrementClickNumber = (projectBeingEdited: Project) => {
        let newValue = clicksNumber + 1
        setClicksNumber(newValue);
        console.log("project with id: [" + projectBeingEdited.id + "] has been clicked [" + newValue + "] times");
    }
    const handleEditClick = (projectBeingEdited: Project) => {
        incrementClickNumber(projectBeingEdited)
        onEdit(projectBeingEdited)
    };


    return (
        <div className="card">
            <img src={project.imageUrl} alt={project.name}/>
            <section className="section dark">
                <h5 className="strong">
                    <strong>{project.name}</strong>
                </h5>
                <p>{formatDescription(project.description)}</p>
                <p>Budget : {project.budget.toLocaleString()}</p>

                <button className="bordered" onClick={() => {
                    handleEditClick(project)
                }}>
                    <span className="icon-edit "></span>
                    Edit
                </button>
                <p>{clicksNumber}</p>

            </section>
        </div>
    );
}

export default ProjectCard;