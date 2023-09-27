import React from "react";

function FavouriteItem (props) {
    return (
        <option value={props.type + "/" + props.id}>{props.name}</option>
    )
}

export default FavouriteItem