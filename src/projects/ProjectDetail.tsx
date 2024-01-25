import React from 'react';
import {Project} from './Project';

interface ProjectDetailProps {
    project: Project;
    // onEdit: (project: Project) => void;
}
export default function ProjectDetail({project}: ProjectDetailProps) {
    return (
        <div className="row">
            <div className="col-sm-6">
                <div className="card large">
                    <img
                        className="rounded"
                        src={project.imageUrl}
                        alt={project.name}
                    />
                    <section className="section dark">
                        <h3 className="strong">
                            <strong>{project.name}</strong>
                        </h3>
                        <p>{project.description}</p>
                        <p>Budget : {project.budget}</p>

                        <p>Signed: {project.contractSignedOn.toLocaleDateString()}</p>
                        <p>
                            <mark className="active">
                                {' '}
                                {project.isActive ? 'active' : 'inactive'}
                            </mark>
                        </p>
                    </section>

                    <button className="bordered" onClick={() => {
                        console.log("update to be implemented...")
                    }}>
                        <span className="icon-edit "></span>
                        Edit (WIP)
                    </button>

                </div>
            </div>
        </div>
    );
}