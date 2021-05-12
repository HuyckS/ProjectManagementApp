import { Link, navigate } from '@reach/router';
import { useEffect } from 'react';
import axios from 'axios';
import "../App.css"
import NavBar from '../components/Navigation/NavBar';

const Dashboard = () => {


    return (
        <div className="wrapper">
            <NavBar />
            <h1 className="title">Dashboard</h1>
            <div className="dashboard-info-box">
                <h3 className="dashboard-info-box-banner">Messages: </h3>
                <div className="dashboard-info-box-content">
                    <p>New messages: 7</p><button>View New</button>
                    <p>Total messages: 11</p><button>View All</button>
                    <p>Archived messages: 5</p><button>View Archive</button>
                </div>
            </div>
            <div>
                <h3 className="dashboard-info-box-banner">Assignments: </h3>
                <div className="dashboard-info-box-content">
                    <p>New Assigned Tasks: 3</p><button>View New Assigned</button>
                    <p>New Project Tasks: 5</p><button>View New Team Tasks</button>
                    <p>Total New Tasks: 8</p><button>View All New Tasks</button>
                </div>
            </div>
            <div>
                <h3 className="dashboard-info-box-banner">Projects: </h3>
                <div className="dashboard-info-box-content">
                    <p>New Project Assignment: 1</p><button>View New Projects</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;