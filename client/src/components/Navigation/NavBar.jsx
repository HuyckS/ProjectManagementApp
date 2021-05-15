import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';

const NavBar = ({ page, setPage }) => {
    //conditional here for nav bar options 
    const user = true;
    const [navigation, setNavigation] = useState([
        <Link className="activeNavBox" to="/" style={{ textDecoration: "none" }}>Home</Link>,
        <Link to="/login" style={{ textDecoration: "none" }}>Login / Register</Link>,
    ]);

    useEffect(() => {
        // CHANGE CONDITIONAL WHEN READY!!!
        if (user !== true) {
            setNavigation([
                <Link className="activeNavBox" to="/" style={{ textDecoration: "none" }}>Home</Link>,
                <Link to="/dashboard" style={{ textDecoration: "none" }}>Dashboard</Link>,
                <Link to="/create/project" style={{ textDecoration: "none" }}>New Project</Link>,
                <Link to="/create/task" style={{ textDecoration: "none" }}>New Task</Link>,
                <Link to="/create/message" style={{ textDecoration: "none" }}>New Message</Link>,
                <Link to="/profile" style={{ textDecoration: "none" }}>User Profile</Link>,
                <Link to="/logout" style={{ textDecoration: "none" }}>Log Out</Link>
            ]);
        }
    }, []);

    const [activeNav, setActiveNav] = useState("");

    return (
        <div className="navBarParent">
            <nav className="navBar">
                {navigation.map((bar, idx) =>
                    <div onChange={e => setActiveNav(idx)} className={(idx === page ? 'activeNavBox' : 'navBox')} key={idx}>
                        <p>{bar}</p>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default NavBar;