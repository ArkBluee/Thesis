import './responder.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';

const Dashboard = () => {
    const [isActive, setIsActive] = useState(false);

    const handleActive = () => {
        setIsActive(true);
        const situationStatus = document.getElementById('situation-status');

        situationStatus.classList.add('fade-out');

        setTimeout(() => {
            situationStatus.textContent = "Active";
            situationStatus.style.color = "green";

            situationStatus.classList.remove('fade-out');
            situationStatus.classList.add('fade-in');
        }, 200);

        setTimeout(() => {
            situationStatus.classList.remove('fade-in');
        }, 200);
    };

    const handleUnavailable = () => {
        setIsActive(false);
        const situationStatus = document.getElementById('situation-status');

        situationStatus.classList.add('fade-out');

        setTimeout(() => {
            situationStatus.textContent = "Unavailable";
            situationStatus.style.color = "red";

            situationStatus.classList.remove('fade-out');
            situationStatus.classList.add('fade-in');
        }, 200);

        setTimeout(() => {
            situationStatus.classList.remove('fade-in');
        }, 200);
    };

    useEffect(() => {
        // Initially set the status to 'Unavailable'
        handleUnavailable();
    }, []);

    const navigate = useNavigate();

    return (
        <div className="index-responder-body">
            <header className="index-responder-header">
                <div className="index-main-text">E-REPORT</div>
            </header>
            <header className="index-header-tab">
                <button className="index-menu-btn">
                    <FontAwesomeIcon icon={faBars} />
                    <span className="index-menu-text">HELLO, RESPONDER</span>
                </button>
                <div className="index-responder-actions">
                    <button className="index-profile-btn">
                        <FontAwesomeIcon icon={faUser} />
                    </button>
                    <button className="index-logout-btn" onClick={() => navigate('/login')}>
                        <FontAwesomeIcon icon={faPowerOff} />
                    </button>
                </div>
            </header>

            <div className="index-tabs-responder">
                <div className="parent-container">
                    <div id="map" className="map-container"></div>
                </div>
                <div className="responder-situation">
                    <div className="situation-text-container">
                        <p className="situation-text">Situation: <span id="situation-status" className="status-text">Unavailable</span></p>
                    </div>
                    <div className="btn-container">
                        <button
                            id="active-btn"
                            className="active-btn"
                            onClick={handleActive}
                            disabled={isActive}
                        >
                            Active
                        </button>
                        <button
                            id="unavailable-btn"
                            className="unavailable-btn"
                            onClick={handleUnavailable}
                            disabled={!isActive}
                        >
                            Unavailable
                        </button>
                        <button onClick={() => navigate('/responder-report-received')}>Next</button>
                    </div>
                </div>
            </div>
            <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
        </div>
    );
};

export default Dashboard;
