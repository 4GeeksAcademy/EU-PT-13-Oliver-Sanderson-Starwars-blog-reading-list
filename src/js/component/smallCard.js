import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

function SmallCard(props) {
    const{store, actions} = useContext(Context)

    let fave = false

    let type

    if(props.url) {
        if(props.url.includes("people")) {type = "characters"}
        else if (props.url.includes("vehicles")) {type = "vehicles"}
        else if (props.url.includes("planets")) {type = "planets"}
    }


    store.favourites.forEach((item) => {
        if (item[0] === type && item[1] === props.arrIndex) {
            fave = true
        }
    })


    return <div className="border border-secondary p-2 m-2 setWidth">
                <img className="img-thumbnail" src={`https://starwars-visualguide.com/assets/img/${type}/${props.id}.jpg`} />
                <h3 className="setWidth">{props.name}</h3>
                {props.gender ? <h5>Gender: {props.gender}</h5> : ""}
                {props.hair ? <h5>Hair-Color: {props.hair}</h5> : ""}
                {props.eye ? <h5>Eye-Color: {props.eye}</h5> : ""}
                {props.manufacturer ? <h5>Manufacturer: {props.manufacturer}</h5> : ""}
                {props.cost ? <h5>Cost: {props.cost}</h5> : ""}
                {props.population ? <h5>Population: {props.population}</h5> : ""}
                {props.terrain ? <h5>Terrain: {props.terrain}</h5> : ""}
                <div className="d-flex justify-content-between mt-4">
                    <Link to={"/profile/" + type + "/" + props.arrIndex} className={`btn btn-primary ${(store.problemsExtras || store.loadingExtras) ? "disabled disabled-link" : ""}`}  >More info</Link>
                    <button className={`btn ${fave ? "btn-danger" : "btn-outline-danger"}`} onClick={() => {actions.addFavourite(type, props.arrIndex)}}><i className={`fa-${fave ? "solid" : "regular"} fa-heart`}></i></button>
                </div>
            </div>
}

export default SmallCard