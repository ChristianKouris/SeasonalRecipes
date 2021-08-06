import React, { useState, useEffect } from "react";
import ProduceDataService from "../services/produce";

const ProduceList = props => {
    const [produce, setProduce] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [season, setSeason] = useState({"spring":false, "summer":false, "fall":false, "winter":false});

    useEffect(() => {
        retrieveProduce();
    }, []);

    const onChangeSearchName = e => {
        const searchName = e.target.value;
        setSearchName(searchName);
    };

    const onChangeSearchSeason = e => {
        const newSeason = e.target.value;
        setSeason({ ...season, [newSeason]: !season[newSeason]})
    };

    const retrieveProduce = () => {
        ProduceDataService.getAll()
            .then(response => {
                console.log(response.data);
                setProduce(response.data.produce);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const find = (query, by) => {
        ProduceDataService.find(query, by)
            .then(response => {
                console.log(response.data);
                console.log(season);
                setProduce(response.data.produce);
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
            <div className="row">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search by name" value={searchName} onChange={onChangeSearchName} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={findByName}>Search</button>
                    </div>
                </div>
            </div>
            <div className="row pb-2">
                <button className={`btn col-sm-3 ${season.spring ? "btn-success" : "btn-outline-secondary"}`} value="spring" type="button" onClick={onChangeSearchSeason}>Spring</button>
                <button className={`btn col-sm-3 ${season.summer ? "btn-success" : "btn-outline-secondary"}`} value="summer" type="button" onClick={onChangeSearchSeason}>Summer</button>
                <button className={`btn col-sm-3 ${season.fall ? "btn-success" : "btn-outline-secondary"}`} value="fall" type="button" onClick={onChangeSearchSeason}>Fall</button>
                <button className={`btn col-sm-3 ${season.winter ? "btn-success" : "btn-outline-secondary"}`} value="winter" type="button" onClick={onChangeSearchSeason}>Winter</button>
            </div>
            <div className="row">
                {produce.map((item) => {
                    return (
                        <div className="col-lg-4 pb-3" key={item._id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">
                                        Season: <br />
                                        {item.spring && <span className="badge bg-success mx-1">Spring</span>}
                                        {item.summer && <span className="badge bg-info mx-1">Summer</span>}
                                        {item.fall && <span className="badge bg-warning mx-1">Fall</span>}
                                        {item.winter && <span className="badge bg-secondary mx-1">Winter</span>}
                                    </p>
                                    <a target="_blank" rel="noreferrer" href={"https://en.wikipedia.org/wiki/" + item.name} className="btn btn-primary col-lg-5 mx-1 mb-1">More Info</a>
                                    <a target="_blank" rel="noreferrer" href={"https://www.allrecipes.com/search/results/?IngIncl=" + item.name} className="btn btn-primary col-lg-5 mx-1 mb-1">View Recipes</a>
                                </div>
                                <img height="250px" className="card-img-bottom" src={item.picture} alt={item.name} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ProduceList;