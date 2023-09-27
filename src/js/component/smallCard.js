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
                <div className="d-flex justify-content-between">
                    <Link to={"/profile/" + type + "/" + props.arrIndex} className="btn btn-primary">More info</Link>
                    <button className={`btn ${fave ? "btn-danger" : "btn-outline-danger"}`} onClick={() => {actions.addFavourite(type, props.arrIndex)}}><i class={`fa-${fave ? "solid" : "regular"} fa-heart`}></i></button>
                </div>
            </div>
}

export default SmallCard