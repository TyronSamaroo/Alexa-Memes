import React, { Component } from 'react';
import GifsDescription from './GifsDescription';

const API_KEY = "cbvNJCBnK7Y9Q4TKieXfTnZHta5lOfqT";

class Gifs extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
    this.getGifs = this.getGifs.bind(this);
  }

  UNSAFE_componentWillMount() {
    this.getGifs();
  }

  getGifs() {
    fetch(`http://api.giphy.com/v1/gifs/search?q=spongebob&api_key=${API_KEY}&limit=5`).then(response => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    }).then(json => {
      this.setState({
        gifs: json.data
      });
    })
  }

  renderGifEntries() {
    return (
      this.state.gifs.map(entry =>
        <GifsDescription
          gif={entry.images.original.url}
          // userImg={entry.user.avatar_url}
          // userName={entry.user.username}
        />
      )
    )
  }

  render() {
    console.log(this.state.gifs);
    return (
      <div>
        {this.renderGifEntries()}
      </div>
    )
  }
}

export default Gifs;
