import React from 'react';
import './App.css';
import Overview from './Overview';

const App: React.FC = () => {
  return (
    <div className="App">
      <Overview></Overview>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, Umi! {cc.name}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>test</Button>
      </header> */}
    </div>
  );
}

export default App;
