import React, { createContext, useState } from 'react';

export const UserDeckContext = createContext();

const UserDeckContextProvider = ( props ) => {
    const [ userDeck, setUserDeck ] = useState([]);

    

    const addCard = (cardObject) => {
        let currentCardName = cardObject.name;
        const sameExistingCard = userDeck.filter(existingCard => {
            return existingCard.name === currentCardName
        });

        if (sameExistingCard.length >3) {
            alert("You can't add more than four copies of the same card");
            return;
        };
        setUserDeck([...userDeck, {"id": cardObject.id ,
                                    "name": cardObject.name,
                                    "image": cardObject.imageSrc,
                                    "cmc": cardObject.cmc,
                                    "colors": cardObject.colors,
                                    "text": cardObject.text}]);
    };

    const removeCard = (currentCardName) => {
        let notYetDeleted = true;
        // setUserDeck(userDeck.filter(singleCard => singleCard.name!==currentCardName));
        userDeck.forEach(singleCard => {
            if(notYetDeleted && singleCard.name===currentCardName) {
                userDeck.splice(userDeck.indexOf(singleCard), 1);
                setUserDeck([...userDeck]);
                notYetDeleted = false;
                console.log(notYetDeleted);
            }
        });
    };

    const userSizeToggle = (idName) => {
        let curr = document.getElementById(idName);
        curr.classList.toggle("user-compressed");
        curr.classList.toggle("user-expanded");
    }

    return (
        <UserDeckContext.Provider value = { {userDeck, addCard, removeCard, userSizeToggle} }>
            { props.children }
        </UserDeckContext.Provider>
    )
    ;
};

export default UserDeckContextProvider;