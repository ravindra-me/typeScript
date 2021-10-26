import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greeting from "./compoent/Greeting";
import Heading from "./compoent/Heading";

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
    </div>
  );
}

export default App;
