import React from "react";

function Functionalprops(props){
    return (<h3>This is a functional component</h3>
    ,<h3>Hello {props.name} from {props.place}! This is where we start.</h3>
    );
}

export default Functionalprops;