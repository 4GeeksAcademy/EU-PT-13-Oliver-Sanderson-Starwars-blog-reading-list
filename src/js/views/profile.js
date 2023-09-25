import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

function Profile () {
    const { store, actions } = useContext(Context)
    const params = useParams();

    const type = params.type
    const arrIndex = params.arrIndex

    if (type === "characters") {
        return (
            <div className="container">
                <h1>Profile page for {store[type][arrIndex]["name"]}</h1>
                <div className="d-flex">
                    <img className="img-thumbnail m-3" src={`https://starwars-visualguide.com/assets/img/${type}/${store.characters[arrIndex]["uid"]}.jpg`}></img>
                    <div className="m-3">
                        <div><b>Name:</b> {store[type][arrIndex]["name"]}</div>
                        <div><b>Birth Year:</b> {store[type][arrIndex]["props"]["birth_year"]}</div>
                        <div><b>Gender:</b> {store[type][arrIndex]["props"]["gender"]}</div>
                        <div><b>Height:</b> {store[type][arrIndex]["props"]["height"]}</div>
                        <div><b>Skin Color:</b> {store[type][arrIndex]["props"]["skin_color"]}</div>
                        <div><b>Eye Color:</b> {store[type][arrIndex]["props"]["eye_color"]}</div>
                    </div>
                </div>
                
                

            </div>
        )
    }

    if (type === "vehicles") {
        return (
            <div className="container">
                <h1>Vehicle information for {store[type][arrIndex]["name"]}</h1>
                <div className="d-flex">
                    <img className="img-thumbnail m-3" src={`https://starwars-visualguide.com/assets/img/${type}/${store.vehicles[arrIndex]["uid"]}.jpg`}></img>
                    <div className="m-3">
                        <div><b>Name:</b> {store[type][arrIndex]["name"]}</div>
                        <div><b>Model:</b> {store[type][arrIndex]["props"]["model"]}</div>
                        <div><b>Class:</b> {store[type][arrIndex]["props"]["vehicle_class"]}</div>
                        <div><b>Manufacturer:</b> {store[type][arrIndex]["props"]["manufacturer"]}</div>
                        <div><b>Crew:</b> {store[type][arrIndex]["props"]["crew"]}</div>
                        <div><b>Passengers:</b> {store[type][arrIndex]["props"]["passengers"]}</div>
                    </div>
                </div>
                

            </div>
        )
    }

    if (type === "planets") {
        return (
            <div className="container">
                <h1>Planet information for {store[type][arrIndex]["name"]}</h1>
                <div className="d-flex">
                    <img className="img-thumbnail m-3" src={`https://starwars-visualguide.com/assets/img/${type}/${store.planets[arrIndex]["uid"]}.jpg`}></img>
                    <div className="m-3">
                        <div><b>Name:</b> {store[type][arrIndex]["name"]}</div>
                        <div><b>Population:</b> {store[type][arrIndex]["props"]["population"]}</div>
                        <div><b>Climate:</b> {store[type][arrIndex]["props"]["climate"]}</div>
                        <div><b>Terrain:</b> {store[type][arrIndex]["props"]["terrain"]}</div>
                        <div><b>Gravity:</b> {store[type][arrIndex]["props"]["gravity"]}</div>
                        <div><b>Water:</b> {store[type][arrIndex]["props"]["surface_water"]}</div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Profile