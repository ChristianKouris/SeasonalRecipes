import React, { useState, useEffect } from "react";
import RestaurantDataService from "../services/restaurant";

const RestaurantsList = props => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        retrieveRestaurants();
    }, []);

    const onChangeSearchName = e => {
        const searchName = e.target.value;
        setSearchName(searchName);
    };

    const onChangeSearchSeason = e => {
        const season = e.target.value;
    };

    const retrieveRestaurants = () => {
        RestaurantDataService.getAll()
            .then(response => {
                console.log(response.data);
                setRestaurants(response.data.restaurants);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const find = (query, by) => {
        RestaurantDataService.find(query, by)
            .then(response => {
                console.log(response.data);
                setRestaurants(response.data.restaurants);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const findByName = () => {
        find(searchName, "name")
    };

    return (
        <div>
            <div className="row pb-1">
                <div className="input-group col-lg-4">
                    <input type="text" className="form-control" placeholder="Search by name" value={searchName} onChange={onChangeSearchName} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={findByName}>Search</button>
                    </div>
                </div>
                <div className="input-group col-lg-4">
                    <select onChange={onChangeSearchSeason}>
                        <option value="spring">Spring</option>
                        <option value="summer">Summer</option>
                        <option value="fall">Fall</option>
                        <option value="winter">Winter</option>
                    </select>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={onChangeSearchSeason}>Search</button>
                    </div>
                </div>
            </div>
            <div className="row">
                {restaurants.map((restaurant) => {
                    return (
                        <div className="col-lg-4 pb-1" key={restaurant._id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{restaurant.name}</h5>
                                    <p className="card-text">
                                        Season: <br />
                                        <span className="badge bg-success mx-1">Spring</span>
                                        <span className="badge bg-info mx-1">Summer</span>
                                        <span className="badge bg-warning mx-1">Fall</span>
                                        <span className="badge bg-secondary mx-1">Winter</span>
                                    </p>
                                    <a target="_blank" href={"https://en.wikipedia.org/wiki/" + "Fruit"} className="btn btn-primary col-lg-5 mx-1 mb-1">More Info</a>
                                    <a target="_blank" href={"https://en.wikipedia.org/wiki/" + "Recipe"} className="btn btn-primary col-lg-5 mx-1 mb-1">View Recipes</a>
                                </div>
                                <img height="300px" className="card-img-bottom" src={restaurant.picture} alt="Card image" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default RestaurantsList;