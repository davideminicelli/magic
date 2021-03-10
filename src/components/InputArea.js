import React from 'react';
import InputField from './InputField';
import '../styles/inputArea.scss'

const InputArea = props => {
    return (
        <section id='inputArea'>
            <InputField  id="name-field" name="Name" type="text" placeholder="Name"/>
            <InputField  id="color" name="Color" type="select" options={["Any", "white", "blue", "black", "red", "green"]}/>
            <InputField  id="cmc" name="Cmc" type="select" options= {["Any", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]}/>
            <InputField  id="types" name="Type" type="select" options={["Any", "Creature", "Instant", "Sorcery", "Enchantment", "Artifact", "Planeswalker"]}/>
            <InputField  id="subtype" name="Subtype" type="text" placeholder="subtype"/>
            <InputField  id="game-format" name="Game Format" type="select" options={["Any", "Standard", "Pioneer", "Commander", "Historic", "Legacy"]}/>
            <button onClick={props.func} type="button" id="submitter">Search</button>
        </section>
    )
}

export default InputArea;