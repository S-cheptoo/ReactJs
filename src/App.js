import React from "react";
import Classprops from "./Classprops";
import Functionalprops from "./Functionalprops";

class App extends React.Component{
  render(){
    return (
      <div>
      <Classprops name="Learner 1" place="New York"><p>Child Component</p></Classprops>
      <Classprops name="Learner 2" place="Nairobi"><button>Click</button></Classprops>
      <Classprops name="Learner 3" place="Carlifonia"/>
      <Functionalprops name="Learner 4" place="A"/>
    </div>
    );
    }  
  }
export default App;