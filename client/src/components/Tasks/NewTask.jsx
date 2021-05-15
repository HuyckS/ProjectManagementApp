import { Link, navigate, useParams } from '@reach/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const NewTask = ({ projects, setProjects, users, tasks, setTasks, setShowTaskForm }) => {

    const [task, setTask] = useState("");
    const [taskOwner, setTaskOwner] = useState("");
    const [complete, setComplete] = useState(false);
    const [taskForProject, setTaskForProject] = useState("");
    const [projectEndDate, setProjectEndDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newTask = {
            task,
            taskOwner,
            complete,
            taskForProject,
            projectEndDate,
            endDate
        };
        axios.post('http://localhost:8080/api/tasks', newTask)
            .then(res => {
                console.log("axios.post Response: ", res);
                setTasks([...tasks, newTask]);
                setShowTaskForm(0);
                // DOES THIS WORK???
                let newProjects = [...projects];
                for (let proj in newProjects) {
                    if (proj.projectName === newTask.taskForProject) {
                        proj.projectTasks = [...proj.projectTasks, newTask];
                        // Need to set in the database too?? axios.put?
                    }
                }
                setProjects(newProjects);
            })
            .catch(err => {
                console.log(err.response)
                //             const {errors} = err.response.data;
                //             const messages = Object.keys(errors).map(error => errors[error].message);
                //             setErrorMessages(messages);
            });
    };
    return (
        <div className="wrapper">
            <h1 className="title">Create Task</h1>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>Task: </label>
                    <div>
                        <input type="text" name="task" onChange={e => setTask(e.target.value)} />
                    </div>
                </div>
                <div>
                    <label>Assign Task: </label>
                    <div>
                        <select name="taskOwner" id="taskOwner" onChange={e => setTaskOwner(e.target.value)}>
                            {users.length > 0 ? users.map((user, idx) =>
                                <div key={idx}>
                                    <option value={user}>{user}</option>
                                </div>
                            ) : "No team members available."}
                        </select>
                    </div>
                </div>
                <div>
                    <select name="taskForProject" id="taskForProject" onChange={e => setTaskForProject(e.target.value)}>
                        {projects.length > 0 ? projects.map((proj, idx) =>
                            <div key={idx}>
                                <option value={proj.projectName}>{proj.projectName}</option>
                                <input type="hidden" name="projectEndDate" value={proj.dueDate} onChange={e => setProjectEndDate(e.target.value)} />
                            </div>
                        ) : "No projects available."}
                    </select>
                </div>
                <div>
                    <label>End Date: </label>
                    <div>
                        <input type="date" name="endDate" onChange={e => setEndDate(e.target.value)} />
                    </div>
                </div>
                <input type="submit" value="CREATE" />
            </form>
        </div>
    )
}

export default NewTask;