import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProduceList from "./components/produce-list";
import HomePage from "./components/homepage";
import NotFound from "./components/not-found";

function App() {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a href="/" className="navbar-brand">
                    Seasonal Recipes
                </a>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/produce"} className="nav-link">Produce</Link>
                    </li>
                </div>
            </nav>
            <div className="container mt-3">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/produce" component={ProduceList} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
            <nav className="navbar navbar-expand navbar-dark bg-dark justify-content-center fixed-bottom">
                <ul className="navbar-nav">
                    <li className="nav-item active">    
                        <a href="https://github.com/ChristianKouris/SeasonalRecipes" className="nav-link" target="_blank" rel="noreferrer">
                            See The Code For This Website
                        </a>
                    </li>
                </ul>
                
            </nav>
        </div>
    );
}

export default App;
