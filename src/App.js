import { Component } from "react";

import FunctionalComp from "./Components/FunctionalComp";
import {ClassComp, ClassComp1} from "./Components/ClassComp";
import Click from "./Components/Click";
import Counter from "./Components/Counter";
import ParentComp from "./Components/ParentComp";
function App() {
  return (
    <div>
      <h1>This is how we start learning React!</h1>
      <h2>Let's do this!</h2>
      <FunctionalComp/>
      <ClassComp/>
      <Click/>
      <Counter/>
      <ParentComp/>
    </div>
      );
}

export default App;
