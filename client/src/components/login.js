import * as Realm from "realm-web";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = props => {
    const app = new Realm.App({ id: "seasonal-recipes-opged" });
    const history = useHistory();
    const [email, setEmail] = useState("name@example.com");
    const [password, setPassword] = useState("");
    const [loginFail, setLoginFail] = useState("");
    
    async function loginEmailPassword() {
        // Create an anonymous credential
        const credentials = Realm.Credentials.emailPassword(email, password);
        try {
            // Authenticate the user
            const user = await app.logIn(credentials);
            // `App.currentUser` updates to match the logged in user
            if (user.id !== app.currentUser.id) {
                throw Error("user.id is not app.currentUser.id");
            }
            //go to the homepage on success
            props.setUser(true);
            history.push("/");
        } catch (err) {
            console.error("Failed to log in", err);
            setLoginFail("Failed to login, incorrect email or password!");
        }
    }

    const onChangeEmail = e => {
        const newEmail = e.target.value;
        setEmail(newEmail);
    };

    const onChangePassword = e => {
        const newPassword = e.target.value;
        setPassword(newPassword);
    };

    return (
        <div>
            <div className="row mx-auto">
                <h1 className="text-center">Login</h1>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={onChangeEmail} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" onChange={onChangePassword} />
                </div>
                <div className="d-grid gap-2 d-md-block">
                    <button className="btn btn-primary" type="button" onClick={loginEmailPassword}>Login</button>
                </div>
                <p className="mt-3 text-danger">{loginFail}</p>
            </div>
        </div>
    );
}

export default Login;