import React, {useContext} from "react";
import "../styles/Displayer.scss";
import SingleCard from './SingleCard';
import {QueryResultContext} from '../contexts/QueryResultContext';


const Displayer = props => {

    const {queryResult} = useContext(QueryResultContext);

    let mappedObjs = props.oggetti.map(oggetto => {
        if (oggetto.imageUrl) {
            return (
                <SingleCard key={oggetto.id} id={oggetto.id} name={oggetto.name} setName={oggetto.setName} imageSrc={oggetto.imageUrl} cmc={oggetto.cmc} colors={oggetto.colors} text={oggetto.text}/>
                // <div className="single-card" key={oggetto.id}>
            // <h3 key={Math.random()}>{oggetto.name}</h3>
            // <img alt={`${oggetto.name}, ${oggetto.setName}`} src={oggetto.imageUrl} /> */}
            // </div>
        )    
    }
    })
    return (
        <section id="display-container">
            <h2 id="display-zone-title">{queryResult.message}</h2>
            <div id="display-zone-content">
                {mappedObjs}
            </div>
        </section>
    )
}

export default Displayer;