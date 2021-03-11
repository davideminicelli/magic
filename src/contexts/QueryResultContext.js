import React, { createContext, useState } from 'react';

export const QueryResultContext = createContext();

const QueryResultContextProvider = (props)=> {
    
    const [ queryResult, setQueryResult ] = useState({
        "objects": [],
        "message": "",
      })
    
      const fetcherHandler = () => {

        setQueryResult({
          "objects": [],
          'message': 'Loading...'
        });
    
        let name = "";
        let color = "";
        let cmc = "";
        let subtype = "";
        let format = "";
        let type = "";
    
        if (document.getElementById("name-field").value !== "") { name = `&name=${document.getElementById("name-field").value}` };
        if (document.getElementById("color").value !== "") { color = `&colors=${document.getElementById("color").value}` };
        if (document.getElementById("cmc").value !== "") { cmc = `&cmc=${document.getElementById("cmc").value}` };
        if (document.getElementById("subtype").value !== "") { subtype = `&subtypes=${document.getElementById("subtype").value}` };
        if (document.getElementById("game-format").value !== "") { format = `&gameFormat=${document.getElementById("game-format").value}` };
        if (document.getElementById("types").value !== "") { type = `&types=${document.getElementById("types").value}` };
    
        fetch(`https://api.magicthegathering.io/v1/cards?${name}${color}${cmc}${subtype}${format}${type}`)
          .then(res => { res = res.json(); return res })
          .then(soned => {
            let sonedArray = soned.cards.map(oggetto => oggetto);
            return sonedArray;
          })
          .then(sonedArray => {
            let withImage = sonedArray.filter(object => object.imageUrl);
            return withImage
          })
          .then(arr => {
            setQueryResult({
              "objects": arr,
              'message': `Cards found: ${arr.length}`
            });
            console.log(queryResult)
          })
          .catch(error => { console.log(`not working: ${error}`) });
      }
    
    
    


    return (
        <QueryResultContext.Provider value={{queryResult, setQueryResult, fetcherHandler}}>
            {props.children}
        </QueryResultContext.Provider>
    )
}

export default QueryResultContextProvider;