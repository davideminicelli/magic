import React, {useContext} from 'react';
import { UserDeckContext } from '../contexts/UserDeckContext';

const UserDeck = (props)=> {

    const  {userDeck, removeCard, userSizeToggle} = useContext(UserDeckContext);




    const deckList = userDeck.map(
        card => <h6 key={card.id + Math.random()}>{card.name}<button onClick={() => removeCard(card.name)}>remove</button></h6>
    )

    return (
        <section id="user-deck-container" className= "user-compressed">
            <h2 onClick={() => userSizeToggle("user-deck-container")}>User Deck List</h2>
            {deckList}
        </section>
    )
}

export default UserDeck;