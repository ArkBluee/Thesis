import './UnitAccount.css';
import logo from'./newbackground.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFile, faUsers, faCircleUser, faRightToBracket } from '@fortawesome/free-solid-svg-icons'

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
                                <a href="unit-home">
                                <FontAwesomeIcon icon={faHouse} className="icon"/>    
                                    <span className="text nav-text">Home</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="unit-accounts">
                                <FontAwesomeIcon icon={faUsers} className="icon"/> 
                                    <span className="text nav-text">Accounts</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="unit-profile">
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
                <div class="text">Welcome, Unit</div>
                <div class="tabs-admin-account">
                <div class="home-wrapper">
                    <button className="create-account" onClick={() => window.location.href = "check-responder-account"}>Check Accounts</button>
                    <button className="create-account"onClick={() => window.location.href = "create-responder-account"}>Create Responder Account</button>
                </div>
        </div>
            </section>
        </body>
    );
};
export default Dashboard;