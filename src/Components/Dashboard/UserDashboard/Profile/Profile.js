import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import './Profile.css'
import toast from 'react-hot-toast';
import { UserContext } from "../../../../App";
import { handleSignOut } from '../../../Auth/LoginManager';
import './Profile.css'

const Profile = () => {
    const {user: {name, email, img}, setUser} = useContext(UserContext);
    const signOut = () => {
        const loading = toast.loading('Please wait...');
        handleSignOut()
        .then(res => {
            toast.dismiss(loading);
            setUser(res)
            toast.error('Logged Out!');
        })
    }
    return (
        <Col md={5} className="mx-auto">
            <div className="profile">
                <h2>{name}</h2>
                <div className="profileInfo">
                    <img src={img} alt={name}/>
                     
                    <h5>{email}</h5> 
                  
                    <button className="btn btn-danger mt-3" onClick={signOut}>Log out</button>
                </div>
            </div>
        </Col>
    );
};

export default Profile;