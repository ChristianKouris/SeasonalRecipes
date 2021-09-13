import * as Realm from "realm-web";
import React from "react";
import { Link } from "react-router-dom";

const ProfileTab = props => {
    const app = new Realm.App({ id: "seasonal-recipes-opged" });
    const logOut = async () => {
        await app.currentUser.logOut();
        props.setUser(false);
    };

    return (
        props.user ?
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={"/"} className="nav-link" onClick={logOut}>Logout</Link>
                </li>
            </ul> :
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={"/login"} className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/login"} className="nav-link">Sign Up</Link>
                </li>
            </ul>
    );
}

export default ProfileTab;