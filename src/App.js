import React from "react";
import InputField from './InputField';
import Displayer from "./Displayer";





class App extends React.Component {


  state={
    "objects": [],
    "message": ""
  };

fetcherHandler = () => {
  
  let name = "";
  let color = "";
  let cmc = "";
  let subtype = "";
  let format = "";
  let type = "";
  
  if (document.getElementById("name-field").value !== "") {name = `&name=${document.getElementById("name-field").value}`};
  if (document.getElementById("color").value !== "") {color = `&colors=${document.getElementById("color").value}`};
  if (document.getElementById("cmc").value !== "") {cmc = `&cmc=${document.getElementById("cmc").value}`};
  if (document.getElementById("subtype").value !== "") {subtype = `&subtypes=${document.getElementById("subtype").value}`};
  if (document.getElementById("game-format").value !== "") {format = `&gameFormat=${document.getElementById("game-format").value}`};
  if (document.getElementById("types").value !== "") {type = `&types=${document.getElementById("types").value}`};
  
      fetch(`https://api.magicthegathering.io/v1/cards?${name}${color}${cmc}${subtype}${format}${type}`)
      .then(res => {res= res.json(); return res})
      // .then(soned => {console.log(soned)})
      .then(soned => {
        let sonedArray = soned.cards.map(oggetto => oggetto);
        return sonedArray;
      })
      .then(arr => {
        this.setState({objects: arr});
        console.log(this.state)
      })
      // .then(array => console.log(array))
      .catch(error => {console.log(`not working: ${error}`)});
    }
    

        
    render() {
    
      
      return (
        <div id="query-container">
          <h1>Magic The gathering database Navigator</h1>
          <InputField  id="name-field" name="Name" type="text" placeholder="Name"/>
          <InputField  id="color" name="Color" type="select" options={["Any", "white", "blue", "black", "red", "green"]}/>
          <InputField  id="cmc" name="Cmc" type="select" options= {["Any", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]}/>
          <InputField  id="types" name="Type" type="select" options={["Any", "Creature", "Instant", "Sorcery", "Enchantment", "Artifact", "Planeswalker"]}/>
          <InputField  id="subtype" name="Subtype" type="text" placeholder="subtype"/>
          <InputField  id="game-format" name="Game Format" type="select" options={["Any", "Standard", "Pioneer", "Commander", "Historic", "Legacy"]}/>
          <button onClick={this.fetcherHandler} type="button" id="submitter">Submit</button>
          <div id="display-zone">
            <h2 id="display-zone">Display Zone</h2>
            <Displayer oggetti={this.state.objects}/>
          </div>
        </div>
      );
    };
  
  }
    
    
  export default App;
    
    
    
   