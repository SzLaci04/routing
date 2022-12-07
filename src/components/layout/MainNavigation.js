import { Link } from "react-router-dom";
//import classes from "./MainNavigation.module.css";

function MainNavigation()
{
    return( 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-brand">
            React Meetups
        </div>
        <div>
            <ul className="navbar-nav">
                <li className="navbar-item"><Link to="/" className="nav-link">All Meetups</Link></li>
                <li className="navbar-item"><Link to="/new-meetup" className="nav-link">New Meetups</Link></li>
                <li className="navbar-item"><Link to="/favorites" className="nav-link">Favorites</Link></li>
            </ul>
        </div>

    </nav>
    );
}

export default MainNavigation;