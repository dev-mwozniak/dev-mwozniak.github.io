import React, { Component } from 'react';
import SecondHeading from "../../ui/SecondHeading/SecondHeading";
import "../../../sass/music.scss";

class Music extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    }; 
  }
 
  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://rss.itunes.apple.com/api/v1/us/itunes-music/hot-tracks/all/10/explicit.json";

    fetch(proxyurl + url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          items: res.feed.results
        });
      });
  }
  

  render() {
    var { items } = this.state;
    var itemInfo = items.map(item => 
      <div className="col-sm-12">
        <div className="container container__music">
          <div className="row">
            <div className="col-sm-12 col-md-5">
              <div className="music__img">
                  <img src={item.artworkUrl100} alt={item.artworkUrl100} />
              </div>
            </div>
            <div className="col-sm-12 col-md-7 music__flex">
              <div className="music__title">
                  {item.artistName}
              </div>
              <div className="music__release">
                  Data premiery: {item.releaseDate}
              </div>
              <div className="music__link">
                <a href={item.url}>Więcej</a>
              </div>
            </div>
          </div>
        </div>
      </div>);
      console.log(items);
    return (
      <div className="col-sm-12 col-md-6 music">
        <SecondHeading>
          Hot Music
        </SecondHeading>
        <div className="container">
          <div className="row">
            {itemInfo}
          </div>
        </div>
      </div>
    );
  }
}

export default Music;