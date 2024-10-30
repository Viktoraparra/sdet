import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wizard from "./components/Wizard";
import WizardStep from "./components/WizardStep";
import VowelsForm from "./components/VowelsForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="instructions">
        <Wizard title="A barebones text wizard">
          <WizardStep>
            <h2>Step 1</h2>
            <p>Some instrucntions for step 1</p>
          </WizardStep>
          <WizardStep>
            <h2>Step 2</h2>
            <p>
              Some long, complicated instructions for step 2. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </WizardStep>
        </Wizard>
      </div>

      <Wizard title="A form wizard">
        <WizardStep>
          <VowelsForm />
        </WizardStep>
        <WizardStep>
          <h2>Step 2</h2>
          <p>There is no Step 2</p>
          <img src="https://i.pinimg.com/originals/c4/a8/56/c4a8562a0785c5c342ee856e4b3b55ae.gif" />
        </WizardStep>
      </Wizard>
    </div>
  );
}

export default App;
