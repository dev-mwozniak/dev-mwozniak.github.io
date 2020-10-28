import React, { Component } from 'react';
import Tv from "./Tv/Tv";
import Music from "./Music/Music";

class Tv_Music extends Component {

  render() {
    return (
      <section className="tv-and-music col-sm-12">
          <div className="container">
            <div className="row">
              <Tv />
              <Music />
            </div>
          </div>
      </section>
    );
  }
}

export default Tv_Music;