import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Router } from '@reach/router';
import Home from './views/Home';
import LoginReg from './views/LoginReg';
import Dashboard from './views/Dashboard';
import Projects from './views/Projects';
import Messages from './views/Messages';
import Tasks from './views/Tasks';
import NewProject from './components/Projects/NewProject';
import ProjectDetails from './views/ProjectDetails';
import UpdateProject from './views/UpdateProject';
import './sass/main.scss';

function App() {
  const [messages, setMessages] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    //DOUBLE CHECK AXIOS CALL URL -- change to sort projects on server side that include person as team member
    axios.get("http://localhost:8080/api/projects")
      .then(res => {
        setProjects(res.data);
      })
      .catch(err => {
        console.log("Project Error: " + err);
      })
    axios.get("http://localhost:8080/api/tasks")
      .then(res => {
        setTasks(res.data);
      })
      .catch(err => {
        console.log("Task Error: " + err);
      })
    axios.get("http://localhost:8080/api/messages")
      .then(res => {
        setMessages(res.data);
      })
      .catch(err => {
        console.log("Message Error: " + err);
      })
    tasks.map((task) => {
      for (let i in projects) {
        if (projects[i].projectName === task.taskForProject && task.complete === false) {
          projects[i].projectTasks = [...projects[i].projectTasks, task];
        }
        if (projects[i].projectName === task.taskForProject && task.complete === true) {
          projects[i].projectTasksCompleted = [...projects[i].projectTasksCompleted, task];
        }
      }
    })
    messages.map((mes) => {
      for (let i in projects) {
        if (projects[i].projectName === mes.relatedProject && mes.viewed === false) {
          projects[i].projectMessagesNotViewed = [...projects[i].projectMessagesNotViewed, mes];
        }
        if (projects[i].projectName === mes.relatedProject && mes.viewed === true) {
          projects[i].projectMessages = [...projects[i].projectMessages, mes];
        }
      }
    })
  }, []);

  return (
    <div>
      <Router>
        <Home path="/" />
        <LoginReg path="/login" />
        <Dashboard path="/dashboard/:id"
          projects={projects}
          setProjects={setProjects}
          messages={messages}
          setMessages={setMessage}
          tasks={tasks}
          setTasks={setTasks}
        />
        <Projects path="/projects"
          projects={projects}
          setProjects={setProjects}
          messages={messages}
          setMessages={setMessage}
          tasks={tasks}
          setTasks={setTasks}
        />
        <Messages path="/messages"
          projects={projects}
          setProjects={setProjects}
          messages={messages}
          setMessages={setMessage}
          tasks={tasks}
          setTasks={setTasks}
        />
        <Tasks path="/tasks"
          projects={projects}
          setProjects={setProjects}
          messages={messages}
          setMessages={setMessage}
          tasks={tasks}
          setTasks={setTasks}
        />
        <NewProject path="/create/project" />
        <NewTask path="/create/task" />
        <NewMessage path="/create/message" />
        <ProjectDetails path="/details/:id" />
        <UpdateProject path="/update/:id" />
        <Logout path="/logout" />
        <UpdateUser path="/update/user" />
      </Router>
    </div>
  );
}

export default App;
