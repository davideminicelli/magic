import React from "react";

const InputField = props => {
    switch (props.type) {
        case "select":
            const htmlOptions= props.options.map(eachOption => {
                if (eachOption === "Any") {return <option key={eachOption+"k"} value="">Any</option>}
                else {return <option key={eachOption+"k"} value={eachOption}>{eachOption}</option>}
                }
            );             
            return (
                <div className="input-field">
                    <label htmlFor={props.id}>{props.name}:</label>
                    <select id={props.id} className="selector" name={props.name}>
                        {htmlOptions}
                    </select> 
                </div>
            );
        case "number": 
            return (
                <div className="input-field">
                <label htmlFor={props.id}>{props.name}:</label>
                <input type={props.type} id={props.id} placeholder={props.placeholder}></input>
                </div>
            );
        default: 
        return (
            <div className="input-field">
            <label htmlFor={props.id}>{props.name}:</label>
            <input type={props.type} id={props.id} placeholder={props.placeholder}></input>
            </div>
        )
    }
};

export default InputField;