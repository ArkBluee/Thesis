import './police.css';
import logo from'../Assets/newbackground.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faEnvelope, faUsers, faCircleUser, faRightToBracket } from '@fortawesome/free-solid-svg-icons'


const Dashboard = () => {

    return (
        <body className="admin-body">
            <nav className="sidebar">
                <header className="header">
                    <div className="image-text">
                        <span class = "image">
                        <img src={logo} alt="logo"></img>
                        <span class="title">Electronic</span>
                        <span class="title">Response</span>
                        <span class="title">Portal</span>
                        </span>
                    </div>
                </header>
                <div className="menu-bar">
                    <div className="menu">
                        <ul className="menu-links">
                            <li className="nav-link">
                                <a href="police-home">
                                <FontAwesomeIcon icon={faHouse} className="icon"/>    
                                    <span className="text nav-text">Home</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="police-notification">
                                <FontAwesomeIcon icon={faEnvelope} className="icon"/> 
                                    <span className="text nav-text">Notification</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="police-profile">
                                <FontAwesomeIcon icon={faCircleUser} className="icon"/> 
                                    <span className="text nav-text">Profile</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom-content">
                        <li className="nav-link">
                            <a href="login">
                            <FontAwesomeIcon icon={faRightToBracket} className="icon"/> 
                                <span className="text nav-text">Logout</span>
                            </a>
                        </li>
                    </div>
                </div>
            </nav>
            <section class="home">
                <div class="text">Dashboard</div>
                <div class="text">Welcome, Officer</div>
            </section>
        </body>
    );
};
export default Dashboard;