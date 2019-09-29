import React from 'react';
import Header from './components/Header';
import Gifs from './components/Gifs';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="left-section"></div>
        <div className="center-section">
          <Gifs/>
        </div>
      <div className="right-section"></div>
    </div>
  );
}

export default App;
