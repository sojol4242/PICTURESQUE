import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  './dashboard.css'
import Sidebar from './Sidebar/Sidebar';
import UserDashBoard from './UserDashboard/UserDashBoard';
const Dashboard = () => {
    const [sideToggle, setSideToggle] = useState(false)
    const [title, setTitle] = useState("")
    return (
        <div id="dashboard">
            <div id="sidebar" className={ sideToggle ? "active" : "" }>
                <div className="sidebarContent">
                <Sidebar setTitle={setTitle}/>
                    <div className="backBtnBox">
                        <Link to="/">
                            <button className="backBtn"> <FontAwesomeIcon icon={faSignOutAlt}/> Back to home</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div id="dashboardContent">
                <div className="dashBoardHeader">
                    <div className="d-flex align-items-center">
                        <div id="nav-icon"
                        className={sideToggle ? "menu-btn" : "menu-btn open"}
                        onClick={() => setSideToggle(!sideToggle)}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <h3>{title}</h3>
                    </div>
                   
                </div>
                {/* {
                    admin ? <AdminDashboard/> : <UserDashboard/>
                } */}
                
                <UserDashBoard/>
            </div>
        </div>
    );
};

export default Dashboard;