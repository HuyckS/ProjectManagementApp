import React, { useEffect, useState } from 'react';
import { Link, navigate } from "@reach/router";
import axios from 'axios';



const DeleteTask = ({ tasks, setTasks, taskId }) => {

    const removeTask = (taskId) => {
        setTasks(tasks.filter(task => task._id !== taskId));

    }

    const handleDelete = (id) => {
        let taskToDelete = tasks.filter(task => task._id === id);
        if (window.confirm(`Delete task: ${taskToDelete.content}?`)) {
            axios.delete('http://localhost:8080/api/tasks/' + id)
                .then(res => {
                    removeTask(id);
                    setTasks()
                })
                .catch((err) => {
                    console.log(err);
                })
        }

    }
    return (
        <div>
            <button onClick={(e) => handleDelete(taskId)}>Delete Task</button>
        </div>

    )
}

export default DeleteTask;