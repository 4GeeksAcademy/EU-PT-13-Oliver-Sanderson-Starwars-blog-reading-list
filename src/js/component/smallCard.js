import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

function SmallCard(props) {
    const{store, actions} = useContext(Context)

    let type

    if(props.url) {
        if(props.url.includes("people")) {type = "characters"}
        else if (props.url.includes("vehicles")) {type = "vehicles"}
        else if (props.url.includes("planets")) {type = "planets"}
    }


    return <div className="border border-secondary p-2 m-2 setWidth">
                <img className="img-thumbnail" src={`https://starwars-visualguide.com/assets/img/${type}/${props.id}.jpg`} />
                <h3 className="setWidth">{props.name}</h3>
                <Link to={"/profile/" + type + "/" + props.arrIndex} className="btn btn-primary">More info</Link>
                <button className="btn btn-danger" onClick={() => {actions.addFavourite(type, props.arrIndex)}}>Fav</button>
            </div>
}

export default SmallCard