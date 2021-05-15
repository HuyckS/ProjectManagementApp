import { Link, navigate } from '@reach/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/Navigation/NavBar';
import SideNavBar from '../components/Navigation/SideNavBar';
import NewTask from '../components/Tasks/NewTask';
import DeleteTask from '../components/Tasks/DeleteTask';

const Tasks = ({ projects, setProjects, messages, setMessages, tasks, setTasks, users }) => {
    let currentUser = "Apollo Huyck";
    const [showTaskForm, setShowTaskForm] = useState(0);
    const [taskList, setTaskList] = useState([]);
    useEffect(() => {
        let newTaskList = [];
        tasks.map((task) => {
            if (task.taskOwner === currentUser) {
                newTaskList.push(task);
            }
        })
        setTaskList(newTaskList);
    }, []);

    // const dayCalculator = (val) => {
    //     let currentDate = new Date();
    //     return val.getTime() - currentDate.getTime()
    // }
    const taskForm = (e) => {
        e.preventDefault();
        setShowTaskForm(1);
    }

    const removeTask = (taskId) => {
        setTasks(tasks.filter(task => task._id !== taskId));

    }

    const handleDelete = (id) => {
        let taskToDelete = tasks.filter(task => task._id === id);
        if (window.confirm(`Delete task: ${taskToDelete.content}?`)) {
            axios.delete('http://localhost:8080/api/tasks/' + id)
                .then(res => {
                    removeTask(id);
                    let newTaskList = [];
                    tasks.map((task) => {
                        if (task.taskOwner === currentUser) {
                            newTaskList.push(task);
                        }
                    })
                    setTaskList(newTaskList);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

    }

    return (
        <div className="wrapper">
            <NavBar />
            <SideNavBar />
            <h1 className="title">Current Tasks</h1>
            <section>
                <button onClick={taskForm}>+ New Task</button>
                {showTaskForm > 0 ?
                    <NewTask
                        showTaskForm={showTaskForm}
                        projects={projects}
                        setProjects={setProjects}
                        users={users}
                        tasks={tasks}
                        setTasks={setTasks} /> : <></>}
                {taskList.length > 0 ?
                    taskList.map((task, idx) =>
                        <div className="task-box" key={idx}>
                            <h3 className="task-box-title">{task.taskForProject}</h3>
                            <div className="task-box-content">
                                <p>{task.task}</p>
                                {/* <p>Days Remaining: {dayCalculator(task.endDate)}</p> */}
                                <button onClick={(e) => handleDelete(task._id)}>Delete Task</button>
                            </div>
                        </div>
                    ) : "You have no current tasks."}
            </section>
        </div>
    )
}

export default Tasks;