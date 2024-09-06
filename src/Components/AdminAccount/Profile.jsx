import './Dashboard.css';
import logo from'../Assets/newbackground.jpg';
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
                                <a href="admin-home">
                                <FontAwesomeIcon icon={faHouse} className="icon"/>    
                                    <span className="text nav-text">Home</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="admin-reports">
                                <FontAwesomeIcon icon={faFile} className="icon"/>  
                                    <span className="text nav-text">Reports</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="admin-accounts">
                                <FontAwesomeIcon icon={faUsers} className="icon"/> 
                                    <span className="text nav-text">Accounts</span>
                                </a>
                            </li>
                            <li className="nav-link">
                                <a href="admin-profile">
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
            <section className="home">
                <div className="text">Dashboard</div>
                <div className="text">Welcome, Admin</div>
                <div className="tabs-admin-profile">
                <div className="home-wrapper">
                            <div className="profile-info"> Account Details
                                <div className= "account-wrapper">
                                <div className="two-forms">
                                <div className="title">FirstName: </div>
                                <div className="subtext">Admin</div>
                                <div className="title">Lastname: </div>
                                <div className="subtext">Admin</div>
                                </div>
                                <div className="title">Username: </div>
                                <div className="subtext">Admin123</div>
                                <div className="title">Email: </div>
                                <div className="subtext">admin@gmail.com</div>
                                <div className="title">Password: </div>
                                <div className="subtext">*************</div>
                                <div className="title">Role: </div>
                                <div className="subtext">Admin</div>
                                <button className="edit-account" onClick={() => window.location.href = "edit-account"}>Edit Account</button>
                                </div>
                            </div>
                </div>
                </div>
            </section>
        </body>
    );
};
export default Dashboard;