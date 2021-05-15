import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';

const SideNavBar = ({ page, setPage }) => {
    //conditional here for nav bar options 
    const sideNav = [
        <Link to="/dashboard" style={{ textDecoration: "none" }}>Dashboard</Link>,
        <Link to="/projects" style={{ textDecoration: "none" }}>Projects</Link>,
        <Link to="/messages" style={{ textDecoration: "none" }}>Messages</Link>,
        <Link to="/tasks" style={{ textDecoration: "none" }}>Tasks</Link>,
        <Link to="/update/user" style={{ textDecoration: "none" }}>Profile</Link>
    ];

    return (
        <div className="sideNavBarParent">
            <nav className="sideNavBar">
                {sideNav.map((location, idx) =>
                    <div key={idx}>
                        <p>{location}</p>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default SideNavBar;