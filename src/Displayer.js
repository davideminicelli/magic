import React from "react";
import "./styles/Displayer.scss";

const Displayer = props => {
    let mappedObjs = props.oggetti.map(oggetto => {
        if (oggetto.imageUrl) {
            return (
                <div className="single-card">
        <h3 key={Math.random()}>{oggetto.name}</h3>
        <img alt={`${oggetto.name}, ${oggetto.setName}`} src={oggetto.imageUrl} />
        </div>
        )    
    }
    })
    return (
        <div id="display-container">{mappedObjs}</div>
    )
}

export default Displayer;