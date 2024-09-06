import './responder.css';
import logo from './newbackground.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faEnvelope, faUsers, faCircleUser, faRightToBracket } from '@fortawesome/free-solid-svg-icons'


const Dashboard = () => {

    return (
        <body class="index-responder-body">
            <header class="index-responder-header">
                <div class="index-main-text">E-REPORT</div>
            </header>
            <header class="index-header-tab">
                <button class="index-menu-btn">
                    <i class="bx bx-menu"></i>
                    <span class="index-menu-text">HELLO, RESPONDER</span>
                </button>
                <div class="index-responder-actions">
                    <button class="index-profile-btn">
                        <i class="bx bx-user"></i>
                    </button>
                    <button class="index-logout-btn" onclick="window.location.href='login.html'">
                        <i class="bx bx-power-off"></i>
                    </button>
                </div>
            </header>
            <div class="index-tabs-responder">
                <div id="map" class="map-container"></div>
                <div class="responder-situation">
                    <p class="situation-text">Situation: <span id="situation-status">[Current Status]</span></p>
                    <button id="active-btn" class="active-btn" onclick="handleActive()">
                        Active
                    </button>
                    <button id="unavailable-btn" class="unavailable-btn" onclick="handleUnavailable()">
                        Unavailable
                    </button>
                </div>
            </div>
            <script src="script.js"></script>
            <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
        </body>
    );
};
export default Dashboard;