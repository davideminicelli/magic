import React from "react";
import { ReactComponent } from "*.svg";

const SingleCard = props => {

    return (
        <div>
            <img src={props.image} alt={props.title} />
                <p>{props.title}</p>
        </div>
    )
}


export default SingleCard;