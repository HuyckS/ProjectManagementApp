import { Link, navigate } from '@reach/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "../App.css"
import NavBar from '../components/Navigation/NavBar';

const Projects = ({ projects, setProjects, messages, setMessage, tasks, setTasks }) => {
    let currentUser = "Apollo Huyck";
    let projectList = [];
    useEffect(() => {
        projects.map((proj) => {
            if (proj.projectLead === currentUser || proj.projectMembers.includes(currentUser)) {
                projectList.push(proj);
            }
        })
    }, []);

    const dayCalculator = (val) => {
        let currentDate = new Date();
        return val.getTime() - currentDate.getTime()
    }

    return (
        <div className="wrapper">
            <NavBar />
            <h1 className="title">Current Projects</h1>
            <section>
                {projectList.length > 0 ?
                    projectList.map((proj, idx) =>
                        <div className="project-box" key={idx}>
                            <h3 className="project-box-title">{proj.projectName}</h3>
                            <div className="project-box-content">
                                <p>Tasks: {proj.projectTasksCompleted} / {proj.projectTasks.length}</p>
                                <p>New Messages: {proj.projectMessagesNotViewed}</p><button>View All</button>
                                <p>Days Remaining: {dayCalculator(proj.dueDate)}</p>
                            </div>
                        </div>
                    ) : "You have no active projects."}
            </section>
        </div>
    )
}

export default Projects;