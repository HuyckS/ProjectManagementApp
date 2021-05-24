import { Link, navigate } from '@reach/router';
import { useEffect } from 'react';
import axios from 'axios';
import styles from '../sass/main.scss';
import NavBar from '../components/Navigation/NavBar';
import Projects from './Projects';

const Home = ({ projects, setProjects, messages, setMessages, tasks, setTasks }) => {

    const handleStart = (e) => {
        e.preventDefault();
        navigate('/login');
    }

    return (
        <div >
            <NavBar />
            <div >
                <h1 className={styles.heading}>Team Connect</h1>
                <h3>Team Connect is an application that provides dedicated space for you and your team to communicate, track, and manage projects of all sizes. Our goal is to keep you focused and organized so that you can get out there and accomplish your goals.</h3>
                <button className={styles.btn} onClick={handleStart} >Start Here!</button>
            </div>
            <div >
                <h3 >Build Your Team</h3>
                <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis aut, incidunt sint recusandae dolorem rerum
                reprehenderit earum,
                repudiandae quos assumenda amet id dolore aliquam minima cum nam vitae. Recusandae, porro!</p>
            </div>
            <div>
                <h3 >Leave Messages</h3>
                <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis aut, incidunt sint recusandae dolorem rerum
                reprehenderit earum,
                repudiandae quos assumenda amet id dolore aliquam minima cum nam vitae. Recusandae, porro!</p>
            </div>
            <div >
                <h3>Track Progress</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis aut, incidunt sint recusandae dolorem rerum
                reprehenderit earum,
                repudiandae quos assumenda amet id dolore aliquam minima cum nam vitae. Recusandae, porro!</p>
            </div>
        </div>
    )
}

export default Home;
