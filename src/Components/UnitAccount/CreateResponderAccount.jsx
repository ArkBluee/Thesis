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
                <div class="tabs-admin-profile">
                <div class="home-wrapper"> 
                <div className="profile-info"> Create Responder Account
                    <div className= "account-wrapper">
                    <div className="form-box register">
            <form action="" className="edit-account-form">
                <div className="two-forms">
                <div className="inputbox">
                    <input type="firstname" placeholder="First Name" required/>
                </div>
                <div className="inputbox">
                    <input type="lastname" placeholder="Last Name" required/>
                </div>
                </div>
                <div className="two-forms">
                <div className="inputbox">
                    <input type="Unit" placeholder="Responder Type" required/>
                </div>
                <div className="inputbox">
                    <input type="username" placeholder="Vehicle" required/>
                </div>
                </div>
                <div className="two-forms">
                <div className="inputbox">
                    <input type="username" placeholder="Username" required/>
                </div>
                <div className="inputbox">
                    <input type="email" placeholder="Email" required/>
                </div>
                </div>
                <div className="inputbox">
                    <input type="Password" placeholder="Password" required/>
                </div>
                <button type="submit" onClick={() => window.location.href = "unit-accounts"}>Submit</button>
            </form>
        </div>  
                    </div>
                    </div>
                </div>
        </div>
            </section>
        </body>
    );
};
export default Dashboard;