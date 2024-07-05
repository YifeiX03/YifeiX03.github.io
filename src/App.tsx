import React from "react";
import "./App.css";
import { useState } from "react";

const now = new Date();

function Hello() {
  return (
    <div>
      <p>Hello World, it is now {now.toString()}</p>
    </div>
  );
}

function Greet(props: any) {
  return (
    <div>
      <p> Hello {props.name}</p>
    </div>
  );
}

function App() {
  console.log("Hello");
  const [counter, setCounter] = useState(0);

  setTimeout(() => setCounter(counter + 1), 1000);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Yippee Epic Website</h1>
        <Hello />
        <Greet name="Bob" />
        <div>{counter}</div>
      </header>
    </div>
  );
}

export default App;
