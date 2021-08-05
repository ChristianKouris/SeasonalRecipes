import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProduceList from "./components/produce-list";

function App() {

    return (
    <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/" className="navbar-brand">
                Seasonal Recipes
            </a>
            <div className="navbar-nav mr-auto">
                <li className="nav-item">
                <Link to={"/produce"} className="nav-link">
                    Produce
                </Link>
                </li>
            </div>
        </nav>

        <div className="container mt-3">
            <Switch>
                <Route exact path={["/", "/produce"]} component={ProduceList} />
            </Switch>
        </div>
    </div>
    );
}

export default App;
