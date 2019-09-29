import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header>
        <h1 class="header-text">DankMemesFromOuter.Space</h1>
      </header>
      <div class="left-section"></div>
        <div class="center-section">
          <div class= "gifs">
            <div class="gifs-left">
              <img class="responsive" src="https://media3.giphy.com/media/11ZSwQNWba4YF2/giphy.gif?cid=a629d6269e0a3f89446a3d3d5219d7e5b12dca78f53b0ebb&rid=giphy.gif"/>
            </div>
            <div class="gifs-right">
              <h4 class="gifs-right-header">Submitted by:</h4>
              
            </div>
          </div>
          <div class= "gifs">
            <div class="gifs-left">
              <img class="responsive" src="https://media2.giphy.com/media/nDSlfqf0gn5g4/giphy.gif?cid=a629d62647b0c24b33bf255ed34950461a566b070d16fa6a&rid=giphy.gif"/>
            </div>
            <div class="gifs-right">
              <h4 class="gifs-right-header">Submitted by:</h4>
              <img class="gifs-right-user" src="https://media3.giphy.com/avatars/spongebob/U4nimQFVGMqR.jpg"/>
              <h4>spongebob</h4>
            </div>
          </div>
        </div>
      <div class="right-section"></div>
    </div>
  );
}

export default App;
