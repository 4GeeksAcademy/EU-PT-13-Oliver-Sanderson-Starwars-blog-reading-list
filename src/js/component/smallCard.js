import React from "react";
import { Link } from "react-router-dom";

function SmallCard(props) {

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
            </div>
}

export default SmallCard