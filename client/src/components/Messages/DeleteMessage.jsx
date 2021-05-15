import React, { useEffect, useState } from 'react';
import { Link, navigate } from "@reach/router";
import axios from 'axios';


const DeleteMessage = ({ messages, setMessages, messageId }) => {

    const removeMessage = (messageId) => {
        setMessages(messages.filter(mes => mes._id !== messageId));

    }

    const handleDelete = (id) => {
        let messageToDelete = messages.filter(mes => mes._id === id);
        if (window.confirm(`Delete message with subject line: ${messageToDelete.subject}?`)) {
            axios.delete('http://localhost:8080/api/messages/' + id)
                .then(res => {
                    removeMessage(id);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

    }
    return (
        <div>
            <button onClick={(e) => handleDelete(messageId)}>Delete Message</button>
        </div>

    )
}

export default DeleteMessage;