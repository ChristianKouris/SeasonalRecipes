import React, { useState, useEffect } from "react";
import ProduceDataService from "../services/produce";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const HomePage = props => {
    const [produce, setProduce] = useState([]);
    const [date, setDate] = useState(new Date());
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    useEffect(() => {
        let query = {};
        query[findSeason(new Date().getMonth())] = true;
        ProduceDataService.find(query)
            .then(response => {
                console.log(response.data);
                setProduce(response.data.produce);
            })
            .catch(e => {
                console.log(e);
            });
    }, []);

    const findSeason = month => {
        switch (month) {
            case 11:
            case 0:
            case 1:
                return "winter";
            case 2:
            case 3:
            case 4:
                return "spring";
            case 5:
            case 6:
            case 7:
                return "summer";
            case 8:
            case 9:
            case 10:
                return "fall";
            default:
                break;
        }
    }

    return (
        <div>
            <div className="row">
                <style>
                    {`.react-calendar {width:100%;}`}
                </style>
                <Calendar
                    onChange={setDate}
                    value={date}
                />
            </div>
            <div className="row">
                <h3>Today's Date is: {months[date.getMonth()]} {date.getDate()} which means it is <strong>{findSeason(date.getMonth()).toUpperCase()}</strong>. The fruits in season are:</h3>
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

export default HomePage;