  
import React, { Component } from 'react';

class GifsDescription extends Component {
  render () {
    return (
      <div className= "gifs">
        <div className="gifs-left">
          <a href={this.props.url} target="_blank" rel="noopener noreferrer">
            <img className="responsive" src={this.props.gif} alt=""/>
          </a>
        </div>
        <div className="gifs-right">
          <h4 className="gifs-right-header">{this.props.title}</h4>
        </div>
      </div>
    );
  }
}

export default GifsDescription;
