import React, {useContext} from 'react';
import { UserDeckContext } from '../contexts/UserDeckContext';
import '../styles/UserDeck.scss';

const UserDeck = (props)=> {

    const  {userDeck, removeCard, userSizeToggle} = useContext(UserDeckContext);




    const deckList = userDeck.map(
        card => <h6 key={card.id + Math.random()}>{card.name}<button className="remove-card-button" onClick={() => removeCard(card.name)}>remove</button></h6>
    )

    return (
        <section id="user-deck-container" className= "user-compressed">
            <h2 onClick={() => userSizeToggle("user-deck-container")}>User Deck List</h2>
            <div id="deck-list">{deckList}</div>
        </section>
    )
}

export default UserDeck;