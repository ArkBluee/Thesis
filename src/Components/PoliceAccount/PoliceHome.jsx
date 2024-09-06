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
                <div class="tabs-admin-home">
                <div class="home-wrapper"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35061.13999764308!2d123.73491292757038!3d13.141868033324188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a101687e9bf8a7%3A0x305252e78d14537a!2sLegazpi%20City%2C%20Albay!5e0!3m2!1sen!2sph!4v1725291363303!5m2!1sen!2sph" width="1500" height="700"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                </div>
            </section>
        </body>
    );
};
export default Dashboard;