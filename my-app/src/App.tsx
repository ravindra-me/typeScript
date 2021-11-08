import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greeting from "./compoent/Greeting";
import Heading from "./compoent/Heading";
import OnClick from "./compoent/OnClick";

let arr = [
  {
    firstName: "Ravindra",
    lastName: "Singh",
  },
  {
    firstName: "Rohit",
    lastName: "Meh",
  },
];

function App() {
  return (
    <div className="App">
      <Greeting name="Ravindra" array={arr}>
        <Heading greeting="Good Morning" />
      </Greeting>
      <OnClick handleClick={() => console.log("I have clicked")}>
        Click me
      </OnClick>
    </div>
  );
}

export default App;
