import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react';
import greeter67 from './functions';
import * as hello from './functions';
import { greeter2, greeter3 } from './functions';

function getClassName() {
  return 'logo';
}

const arr = ['hello', 'world'];
const [firstOne, secondOne, somethingElese] = arr;
// const first = arr[0];
// const second = arr[1];

const obj =  { prop1: 'hello', prop2: 'world' };
// Destructuring
const { prop1, prop2 } = obj;
// const prop1 = obj.prop1;
// const prop2 = obj.prop2;

function App() {
  // Reserved keywords: 
  let [className, setWhatever] = useState('green');

  // {} => allows us to use expressions in the template
  // Statement -> Static structure that doesn't result in a value
  // Expressions -> Anything that can result in a value 
  function setColor(color) {
    setWhatever(color);
  }

  console.log({ className });

  greeter67();

  return (
    <section>
      <p className={className}>Hello world!</p>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")}>Blue</button>
    </section>
  );
}

// export default App



function useState2() {
  let variable = null;

  function setVariable(newValue) {
    variable = newValue;
    // React.rerenderComponent();
  }

  return [variable, setVariable];
}

let [className, setClassName] = useState2('');
