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
import NewTask from './components/Tasks/NewTask';
import NewMessage from './components/Messages/NewMessage';
import ProjectDetails from './views/ProjectDetails';
import UpdateProject from './components/Projects/UpdateProject';
import UserProfile from './views/UserProfile';
import Logout from './components/Logout';
import './sass/main.scss';

function App() {
  const [messages, setMessages] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([])

  useEffect(() => {
    //DOUBLE CHECK AXIOS CALL URL -- change to sort projects on server side that include person as team member
    axios.get("http://localhost:8080/api/projects")
      .then(res => {
        setProjects(res.data.Projects);
      })
      .catch(err => {
        console.log("Project Error: " + err);
      })
    axios.get("http://localhost:8080/api/tasks")
      .then(res => {
        setTasks(res.data.Tasks);
      })
      .catch(err => {
        console.log("Task Error: " + err);
      })
    axios.get("http://localhost:8080/api/messages")
      .then(res => {
        setMessages(res.data.Messages);
      })
      .catch(err => {
        console.log("Message Error: " + err);
      })
    axios.get("http://localhost:8080/api/user/names")
      .then(res => {
        setMessages(res.data.Users);
      })
      .catch(err => {
        console.log("User Error: " + err);
      })


  }, []);

  return (
    <div>
      <Router>
        <Home path="/"
          projects={projects}
          setProjects={setProjects}
          messages={messages}
          setMessages={setMessages}
          tasks={tasks}
          setTasks={setTasks}
        />
        <LoginReg path="/login" />
        <Dashboard path="/dashboard"
          projects={projects}
          setProjects={setProjects}
          messages={messages}
          setMessages={setMessages}
          tasks={tasks}
          setTasks={setTasks}
        />
        <Projects path="/projects"
          projects={projects}
          setProjects={setProjects}
          messages={messages}
          setMessages={setMessages}
          tasks={tasks}
          setTasks={setTasks}
          users={users}
        />
        <Messages path="/messages"
          projects={projects}
          setProjects={setProjects}
          messages={messages}
          setMessages={setMessages}
          tasks={tasks}
          setTasks={setTasks}
        />
        <Tasks path="/tasks"
          projects={projects}
          setProjects={setProjects}
          messages={messages}
          setMessages={setMessages}
          tasks={tasks}
          setTasks={setTasks}
        />
        <NewProject path="/create/project"
          projects={projects}
          setProjects={setProjects}
          users={users}
          setUsers={setUsers}
        />
        {/* <NewTask path="/create/task"
          tasks={tasks}
          setTasks={setTasks}
          projects={projects}
          setProjects={setProjects}
          users={users}
          setUsers={setUsers}
        />
        <NewMessage path="/create/message"
          messagess={messages}
          setMessages={setMessages}
          projects={projects}
          setProjects={setProjects}
          users={users}
          setUsers={setUsers}
        /> */}
        {/* 
        <ProjectDetails path="/details/:id" />
        <UpdateProject path="/update/:id" />
        <Logout path="/logout" />
        <UserProfile path="/update/user" /> */}
      </Router>
    </div>
  );
}

export default App;
