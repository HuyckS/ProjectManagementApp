import React, { useEffect, useState } from 'react';
import { Link, navigate } from "@reach/router";
import axios from 'axios';



const DeleteProject = ({ projects, setProjects, tasks, setTasks, projectId }) => {

    const removeProject = (projectId) => {
        setProjects(projects.filter(proj => proj._id !== projectId));

    }

    const removeTask = (taskId) => {
        setTasks(tasks.filter(task => task._id !== taskId));

    }

    const handleDelete = (id) => {
        let projectToDelete = projects.filter(proj => proj._id === id);
        let tasksToDelete = projectToDelete.projectTasks;
        if (window.confirm(`Delete ${projectToDelete.projectName}?`)) {
            axios.delete('http://localhost:8080/api/projects/' + id)
                .then(res => {
                    removeProject(id);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        if (tasksToDelete !== undefined) {

            for (let i = 0; i < tasksToDelete.length; i++) {
                axios.delete('http://localhost:8080/api/tasks/' + tasksToDelete[i]._id)
                    .then(res => {
                        removeTask(tasksToDelete[i]._id);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        }

    }

    return (
        <div>
            <button onClick={(e) => handleDelete(projectId)}>Delete Project</button>
        </div>

    )
}

export default DeleteProject;