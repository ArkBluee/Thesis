import './responder.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const Dashboard = () => {
    const navigate = useNavigate();
    const [buttonClicked, setButtonClicked] = useState(false);

    const handleRespondClick = () => {
        setButtonClicked(true);
    };

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
                    <div id="map" className="map-container" alt="map"></div>
                </div>

                <div className="report-container">
                    <p className='report-header-text'>Emergency Report Details</p>
                    <div className='report-parent-container'>
                        <div className="report-details-container">
                            <p className="d1">Victim: [Insert Victim Name]</p>
                            <p className="d2">Reporter ID: [Insert Reporter ID]</p>
                            <p className="d3" id="distance">Distance: [Distance]</p>
                            <p className="d4">Location: [Insert Location]</p>
                            <p className="d5">Description: [Insert Description]</p>
                            <p className="d6">Date/Time: [Insert Date/Time]</p>
                        </div>
                        <div className="notif-picture-container">
                            <img src="/path-to-your-image.jpg" alt="Scene Photo" className="scene-picture" />
                        </div>
                    </div>
                </div>

                <div className='respond-btn-container'>
                    <button
                        id="respond-btn"
                        className={`respond-btn ${buttonClicked ? 'button-hidden' : ''}`}
                        onClick={handleRespondClick}
                    >
                        RESPOND
                    </button>
                    <p id="respond-text" className={`respond-text ${buttonClicked ? 'text-visible' : ''}`}>
                        Responding to the scene...
                    </p>
                </div>
                <button onClick={() => navigate('/responder-final')}>Next</button> {/* temporary */}
            </div>
        </div>
    );
};

export default Dashboard;
