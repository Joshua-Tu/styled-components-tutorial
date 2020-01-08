import React from 'react';
import './App.css';
import {Button, SecondButton} from './Buttons';
import Header from './components/Header'

// const name = 'john'
// const greeting = `hello, my name is ${name}`
// styled-components utilizes tagged template literals to style your components
// function`` - tagged template literal

function App() {
  return (
    <div>
      <Header />
      <Button>click me</Button>
      <SecondButton>click me i'm second</SecondButton>
    </div>
  );
}

export default App;
