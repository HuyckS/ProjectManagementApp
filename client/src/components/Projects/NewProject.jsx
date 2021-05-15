import { Link, navigate, useParams } from '@reach/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const NewProject = ({ projects, setProjects, users, showProjectForm, setShowProjectForm }) => {

    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [projectLead, setProjectLead] = useState("");
    const [projectMembers, setProjectMembers] = useState([]);
    const [projectTasks, setProjectTasks] = useState([]);
    const [projectTasksCompleted, setTasksCompleted] = useState([]);
    const [dueDate, setDueDate] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newProject = {
            projectName,
            projectDescription,
            projectLead,
            projectMembers,
            projectTasks,
            projectTasksCompleted,
            dueDate
        };
        axios.post('http://localhost:8080/api/projects', newProject)
            .then(res => {
                console.log("axios.post Response: ", res);
                setProjects([...projects, newProject]);
                setShowProjectForm(0);
                navigate('/projects');
            })
            .catch(err => {
                console.log(err.response)
                //             const {errors} = err.response.data;
                //             const messages = Object.keys(errors).map(error => errors[error].message);
                //             setErrorMessages(messages);
            });
    };

    const handleCheckbox = (e) => {
        if (projectMembers.includes(e.target.value)) {
            setProjectMembers(projectMembers.filter(checkbox => checkbox !== e.target.value))
            console.log("off", e.target.value);
        } else {
            setProjectMembers([...projectMembers, e.target.value]);
            console.log("on", e.target.value);
        };
    }

    return (
        <div className="wrapper">
            <h1 className="title">Build Project</h1>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>Project Name: </label>
                    <div>
                        <input type="text" name="projectName" onChange={e => setProjectName(e.target.value)} />
                    </div>
                </div>
                <div>
                    <label>Project Description: </label>
                    <div>
                        <input type="textarea" name="projectDescription" onChange={e => setProjectDescription(e.target.value)} />
                    </div>
                </div>
                <div>
                    <label>Project Lead: </label>
                    <div>
                        <input type="text" name="projectLead" onChange={e => setProjectLead(e.target.value)} />
                    </div>
                </div>
                <div>
                    <label>Project Members: </label>
                    <div>
                        {users.length > 0 ? users.map((user, idx) =>
                            <div key={idx}>
                                <input type="checkbox" name={user} value={user} onChange={handleCheckbox} />
                                <label htmlFor={user}> {user} </label>
                            </div>
                        ) : "No team members to add."}
                    </div>
                </div>
                <div>
                    <label>Due Date: </label>
                    <div>
                        <input type="date" name="dueDate" onChange={e => setDueDate(e.target.value)} />
                    </div>
                </div>
                <input type="submit" value="BUILD" />
            </form>
        </div>
    )
}

export default NewProject;