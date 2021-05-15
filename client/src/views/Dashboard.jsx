import { Link, navigate } from '@reach/router';
import { useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/Navigation/NavBar';
import SideNavBar from '../components/Navigation/SideNavBar';

const Dashboard = ({ projects, setProjects, messages, setMessages, tasks, setTasks }) => {


    // console.log(projects);
    // if (projects.length > 0) {

    //     let newProjects = [...projects];
    //     for (let i = 0; i < tasks.length; i++) {
    //         for (let j in newProjects) {
    //             if (newProjects[j].projectName === tasks[i].taskForProject && tasks[i].complete === false && !newProjects[j].projectsTasks.include(tasks[i].taskForProject)) {
    //                 newProjects[j].projectTasks = [...newProjects[j].projectTasks, tasks[i]];
    //             }
    //             if (newProjects[j].projectName === tasks[i].taskForProject && tasks[i].complete === true && !newProjects[j].projectsTasks.include(tasks[i].taskForProject)) {
    //                 newProjects[j].projectTasksCompleted = [...newProjects[j].projectTasksCompleted, tasks[i]];
    //             }
    //         }
    //     }

    //     for (let k = 0; k < messages.length; k++) {

    //         for (let m in newProjects) {
    //             if (newProjects[m].projectName === messages[k].relatedProject && messages[k].viewed === false && !newProjects[m].projectMessages.include(messages[k].relatedProject)) {
    //                 newProjects[m].projectMessagesNotViewed = [...newProjects[m].projectMessagesNotViewed, messages[k]];
    //             }
    //             if (newProjects[m].projectName === messages[k].relatedProject && messages[k].viewed === true && !newProjects[m].projectMessages.include(messages[k].relatedProject)) {
    //                 newProjects[m].projectMessages = [...newProjects[m].projectMessages, messages[k]];
    //             }
    //         }
    //     }
    //     setProjects(newProjects);
    // })
    return (
        <div className="wrapper">
            <NavBar />
            <SideNavBar />
            <h1 className="title">Dashboard</h1>
            <div className="dashboard-info-box">
                <h3 className="dashboard-info-box-banner">Messages: </h3>
                <div className="dashboard-info-box-content">
                    <p>New messages: 7</p><button>View New</button>
                    <p>Total messages: 11</p><button>View All</button>
                    <p>Archived messages: 5</p><button>View Archive</button>
                </div>
            </div>
            <div>
                <h3 className="dashboard-info-box-banner">Assignments: </h3>
                <div className="dashboard-info-box-content">
                    <p>New Assigned Tasks: 3</p><button>View New Assigned</button>
                    <p>New Project Tasks: 5</p><button>View New Team Tasks</button>
                    <p>Total New Tasks: 8</p><button>View All New Tasks</button>
                </div>
            </div>
            <div>
                <h3 className="dashboard-info-box-banner">Projects: </h3>
                <div className="dashboard-info-box-content">
                    <p>New Project Assignment: 1</p><button>View New Projects</button>
                </div>
            </div>
        </div >
    )
}

export default Dashboard;