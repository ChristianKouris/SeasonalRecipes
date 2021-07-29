import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RestaurantsList from "./components/restaurants-list";

function App() {

    return (
    <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/restaurants" className="navbar-brand">
                Seasonal Recipes
            </a>
            <div className="navbar-nav mr-auto">
                <li className="nav-item">
                <Link to={"/restaurants"} className="nav-link">
                    Produce
                </Link>
                </li>
            </div>
        </nav>

        <div className="container mt-3">
            <Switch>
                <Route exact path={["/", "/restaurants"]} component={RestaurantsList} />
            </Switch>
        </div>
    </div>
    );
}

export default App;
