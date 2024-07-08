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

// function Greet(props: any) {
//   return (
//     <div>
//       <p> Hello {props.name}</p>
//     </div>
//   );
// }

const Display = ({ counter }: any) => <div>{counter}</div>;
const Button = ({ onClick, text }: any) => (
  <button onClick={onClick}>{text}</button>
);

const AddForm = ({ func, amount }: any) => {
  const [value, setValue] = useState(0);
  function addAmount(num: number) {
    if (!isNaN(num)) {
      func(num);
    }
  }
  if (isNaN(value)) {
    setValue(0);
  }
  return (
    <div>
      <input
        onChange={(e) => setValue(parseInt(e.target.value))}
        type="number"
      />
      <button onClick={() => addAmount(amount + value)}>Add {value}</button>
    </div>
  );
};

console.log("Hello");
// setTimeout(() => setCounter(counter + 1), 1000);
// const increaseByOne = () => setCounter(counter + 1);
// const decreaseByOne = () => setCounter(counter - 1);
// const setToZero = () => setCounter(0);

const Navbar = ({ setScreen }: any) => {
  return (
    <ul className="Navbar">
      <li className="Navbar-element" onClick={() => setScreen(0)}>
        Page1
      </li>
      <li className="Navbar-element" onClick={() => setScreen(1)}>
        Page2
      </li>
    </ul>
  );
};

const TestApp = () => {
  const [counter, setCounter] = useState(0);
  const setToValue = (newValue: any) => () => {
    console.log("value now: ", newValue);
    setCounter(newValue);
  };
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Epic Website</h1>
        <Hello />
        <Display counter={counter} />
        <Button onClick={setToValue(counter + 1)} text="+1" />
        <Button onClick={setToValue(counter - 1)} text="-1" />
        <Button onClick={setToValue(0)} text="0" />
        <AddForm func={setCounter} amount={counter} />
        {show == true && <span>Hello there!</span>}
        <button onClick={() => setShow(!show)}>Toggle</button>
      </header>
    </div>
  );
};

const FunScreen = () => {
  return (
    <div className="App">
      <header className="App-header">Not implemented yet :/</header>
      <div>Ya</div>
    </div>
  );
};

function App() {
  const [screen, setScreen] = useState(0);
  return (
    <div>
      <Navbar setScreen={setScreen} />
      {screen == 0 && <TestApp />}
      {screen == 1 && <FunScreen />}
    </div>
  );
}

export default App;
