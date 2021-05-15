import { Link, navigate, useParams } from '@reach/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const NewMessage = ({ projects, setProjects, users, messages, setMessages }) => {

    let currentUser = "Apollo Huyck";

    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const [sender, setSender] = useState(currentUser);
    const [recipient, setRecipient] = useState("");
    const [priority, setPriority] = useState("");
    const [viewed, setViewed] = useState(false);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newMessage = {
            subject,
            content,
            sender,
            recipient,
            priority,
            viewed,
        };
        axios.post('http://localhost:8080/api/projects', newMessage)
            .then(res => {
                console.log("axios.post Response: ", res);
                setMessages([...messages, newMessage])
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
            <h1 className="title">New Message</h1>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <input type="hidden" name="sender" value={currentUser} />
                </div>
                <div>
                    <label>Recipient: </label>
                    <select name="recipient" id="recipient" onChange={e => setRecipient(e.target.value)}>
                        {users.length > 0 ? users.map((user, idx) =>
                            <div key={idx}>
                                <option value={user}>{user}</option>
                            </div>
                        ) : "Add team members to send messages."}
                    </select>
                </div>
                <div>
                    <label>Subject: </label>
                    <div>
                        <input type="text" name="subject" onChange={e => setSubject(e.target.value)} />
                    </div>
                </div>
                <div>
                    <div>
                        <input type="textarea" name="content" onChange={e => setContent(e.target.value)} />
                    </div>
                </div>
                <div>
                    <label>Priority: </label>
                    <select name="priority" id="priority" onChange={e => setPriority(e.target.value)}>
                        <option value="normal">Normal</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <input type="submit" value="SEND" />
            </form>
        </div>
    )
}

export default NewMessage;