import React from "react";

const Displayer = props => {
    let mappedObjs = props.oggetti.map(oggetto => {
        return (
        <div>
        <h3 key={Math.random()}>{oggetto.name}</h3>
        <img alt={oggetto.name} src={oggetto.imageUrl} />
        </div>
        )    
})
    return (
        <div>{mappedObjs}</div>
    )
}

export default Displayer;