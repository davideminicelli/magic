import React from "react";
import { useContext } from "react";
import { UserDeckContext } from "../contexts/UserDeckContext";

const SingleCard = props => {

    const { addCard } = useContext(UserDeckContext);

    return (
        <div className = 'single-card'>
            <h3 key = { Math.random() }>{ props.name }</h3>
        <img alt = { `${props.name}, ${ props.setName }` } src = { props.imageSrc }/>
        <button className="add-card-button" onClick = {() => addCard({"id": props.id ,
                                        "name": props.name,
                                        "image": props.imageSrc,
                                        "cmc": props.cmc,
                                        "colors": props.colors,
                                        "text": props.text})
                                    }>Add to deck</button>
        </div>
    )
}


export default SingleCard;