  
import React, { Component } from 'react';

class GifsDescription extends Component {
  render () {
    return (
      <div className= "gifs">
        <div className="gifs-left">
          <img className="responsive" src={this.props.gif} alt=""/>
        </div>
        <div className="gifs-right">
          <h4 className="gifs-right-header">Submitted by:</h4>
          <img className="gifs-right-user" src="https://media3.giphy.com/avatars/spongebob/U4nimQFVGMqR.jpg" alt=""/>
          <h4>spongebob</h4>
        </div>
      </div>
    );
  }
}

export default GifsDescription;
