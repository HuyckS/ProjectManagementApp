import { Link, navigate } from '@reach/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "../App.css"
import NavBar from '../components/Navigation/NavBar';

const Tasks = ({ projects, setProjects, messages, setMessage, tasks, setTasks }) => {
    let currentUser = "Apollo Huyck";
    let taskList = [];
    useEffect(() => {
        tasks.map((task) => {
            if (task.taskOwner === currentUser) {
                taskList.push(task);
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
            <h1 className="title">Current Tasks</h1>
            <section>
                {taskList.length > 0 ?
                    taskList.map((task, idx) =>
                        <div className="task-box" key={idx}>
                            <h3 className="task-box-title">{task.taskForProject}</h3>
                            <div className="task-box-content">
                                <p>{task.task}</p>
                                <p>Days Remaining: {dayCalculator(task.endDate)}</p>
                            </div>
                        </div>
                    ) : "You have no current tasks."}
            </section>
        </div>
    )
}

export default Tasks;