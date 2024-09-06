import './user.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faPowerOff, faCamera } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';

const Dashboard = () => {

    const navigate = useNavigate();

    return (
        <div className="index-reporter-body">
            <header className="index-reporter-header">
                <div className="index-main-text">E-REPORT</div>
            </header>
            <header className="index-header-tab">
                <button className="index-menu-btn">
                    <FontAwesomeIcon icon={faBars} />
                    <span className="index-menu-text">HELLO, REPORTER</span>
                </button>
                <div className="index-reporter-actions">
                    <button className="index-profile-btn">
                        <FontAwesomeIcon icon={faUser} />
                    </button>
                    <button className="index-logout-btn" onClick={() => navigate('/login')}>
                        <FontAwesomeIcon icon={faPowerOff} />
                    </button>
                </div>
            </header>

            <div className="index-tabs-reporter">
                <div className="camera-container">

                </div>
                <div className="capture-btn-container">
                    <button className="capture-btn" onClick={() => navigate('/user-emergency-type')}>
                        <FontAwesomeIcon icon={faCamera} />
                    </button>
                    <p className="capture-text">CAPTURE THE EMERGENCY SCENE</p>
                </div>
            </div>


            <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>

        </div>
    );
};

export default Dashboard;
