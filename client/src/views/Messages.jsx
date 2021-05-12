import { Link, navigate } from '@reach/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "../App.css"
import NavBar from '../components/Navigation/NavBar';

const Messages = ({ projects, setProjects, messages, setMessage, tasks, setTasks }) => {
    let currentUser = "Apollo Huyck";
    let inbox = [];
    let inboxViewed = [];
    useEffect(() => {
        messages.map((mes) => {
            if (mes.recipient === currentUser && mes.viewed === false) {
                inbox.push(mes);
            }
            if (mes.recipient === currentUser && mes.viewed === true) {
                inbox.push(mes);
            }
        })
    }, []);

    const toggleMessage = (e) => {
        e.preventDefault();
        // toggle the content and buttons for the message
    }

    return (
        <div className="wrapper">
            <NavBar />
            <h1 className="title">Message Center</h1>
            <section>
                <h3 className="section-heading">New Messages</h3>
                {inbox.length > 0 ?
                    inbox.map((mes, idx) =>
                        <div className="message-box" key={idx}>
                            <h3 className="message-box-title">{mes.subject}</h3>
                            <div className="message-box-content">
                                <p>From:{mes.sender}</p>
                                <p>Regarding: {mes.relatedProject}</p>
                                <p>Priority: {mes.priority}</p>
                                <p>Content: {mes.content}</p>
                                <button>Respond</button>
                                <button>Delete</button>
                                <button>Archive</button>
                            </div>
                        </div>
                    ) : "You have no new messages."}
            </section>
            <section>
                <h3 className="section-heading">Inbox</h3>
                {inboxViewed.length > 0 ?
                    inboxViewed.map((mes, idx) =>
                        <div className="message-box" onClick={toggleMessage} key={idx}>
                            <h3 className="message-box-title">{mes.subject}</h3>
                            <div className="message-box-content">
                                <p>From:{mes.sender}</p>
                                <p>Regarding: {mes.relatedProject}</p>
                                <p>Priority: {mes.priority}</p>
                                <p>Content: {mes.content}</p>
                                <button>Respond</button>
                                <button>Delete</button>
                                <button>Archive</button>
                            </div>
                        </div>
                    ) : "You have no new messages."}
            </section>
        </div>
    )
}

export default Messages;