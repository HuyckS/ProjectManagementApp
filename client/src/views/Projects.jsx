import { Link, navigate } from '@reach/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/Navigation/NavBar';
import SideNavBar from '../components/Navigation/SideNavBar';
import NewProject from '../components/Projects/NewProject';
import DeleteProject from '../components/Projects/DeleteProject';

const Projects = ({ projects, setProjects, messages, setMessages, tasks, setTasks, users }) => {

    let currentUser = "Apollo Huyck";
    const [projectList, setProjectList] = useState([]);
    const [showProjectForm, setShowProjectForm] = useState(0);

    useEffect(() => {
        let userProjects = [];
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].projectLead === currentUser || projects[i].projectMembers.includes(currentUser)) {
                userProjects.push(projects[i]);
            }
        }
        console.log(userProjects);
        setProjectList(userProjects);
    }, []);

    // const dayCalculator = (val) => {
    //     let currentDate = new Date();
    //     return val.getTime() - currentDate.getTime()
    // }
    const projectForm = (e) => {
        e.preventDefault();
        setShowProjectForm(1);
    }


    return (
        <div className="wrapper">
            <NavBar />
            <SideNavBar />
            <h1 className="title">Current Projects</h1>
            <section>
                <button onClick={projectForm}>+ New Project</button>
                {showProjectForm > 0 ?
                    <NewProject
                        showProjectForm={showProjectForm}
                        setShowProjectForm={setShowProjectForm}
                        projects={projects}
                        setProjects={setProjects}
                        users={users} /> : <></>}
                <div>
                    {projectList.length > 0 ?
                        projectList.map((proj, idx) =>
                            <div className="project-box" key={idx}>
                                <h3 className="project-box-title">{proj.projectName}</h3>
                                <div className="project-box-content">
                                    <p>Tasks: {proj.projectTasksCompleted} / {proj.projectTasks.length}</p>
                                    <p>New Messages: {proj.projectMessagesNotViewed}</p><button>View All</button>
                                    {/* <p>Days Remaining: {dayCalculator(proj.dueDate)}</p> */}
                                    <DeleteProject projectId={proj._id} tasks={tasks} setTasks={setTasks} projects={projects} setProjects={setProjects} />
                                </div>
                            </div>
                        ) : "You have no active projects."}
                </div>
            </section>
        </div>
    )
}

export default Projects;