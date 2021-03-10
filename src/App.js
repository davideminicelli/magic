import React, { useContext } from "react";
import Displayer from "./components/Displayer";
import InputArea from "./components/InputArea";
import UserDeck from './components/UserDeck';
import { QueryResultContext } from "./contexts/QueryResultContext";
import UserDeckContextProvider from "./contexts/UserDeckContext";
import './styles/App.scss';





const App = () => {
  
  
  const {queryResult, setQueryResult} = useContext(QueryResultContext);


  const fetcherHandler = () => {

    let controller = new AbortController();
    controller.abort();

    setQueryResult({
      "objects": [],
      'message': ' - Loading...'
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
          'message': ` - Cards found: ${arr.length}`
        });
      })
      .catch(error => { console.log(`not working: ${error}`) });
  }

  const toggleUserDeck = ()=> {
    let deckArea = document.getElementById('user-deck-container');
    deckArea.classList.toggle('user-deck-expanded');
    deckArea.classList.toggle('user-deck-contracted')
  }

  return (
    <div id="main-body">
      <UserDeckContextProvider>
        <InputArea func={fetcherHandler}/>
          <div id="results-body">
            <h1>Magic The Gathering database Navigator</h1>
            <Displayer oggetti={queryResult.objects} />
          </div>
        <UserDeck contractFunction={toggleUserDeck}/>
      </UserDeckContextProvider>
    </div>
  );


}


export default App;



