import { Link, navigate } from '@reach/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/Navigation/NavBar';
import SideNavBar from '../components/Navigation/SideNavBar';

const UserProfile = () => {
    let currentUser = "Apollo Huyck";

    return (
        <div className="wrapper">
            <NavBar />
            <SideNavBar />
            <h1 className="title">Profile</h1>
            <section>
                <h2>{currentUser}</h2>

            </section>
        </div>
    )
}

export default UserProfile;