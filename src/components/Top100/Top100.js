import React, { Component } from 'react';
import MainHeading from "../ui/MainHeading/MainHeading";
import styled, { keyframes } from "styled-components";
import FadeIn from "react-animations/lib/fade-in";

const FadeInAnimation = keyframes`${FadeIn}`;
const FadeInDiv = styled.div`animation: 5s ${FadeInAnimation};`;

class Top100 extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      search: null
    }; 
  }
 
  componentDidMount() {
    fetch("https://itunes.apple.com/us/rss/topmovies/limit=100/json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          items: res.feed.entry
        });
      });
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render() {
    var { items } = this.state;
    var itemInfo = items.filter((item)=>{
      if(this.state.search == null)
          return item
      else if(item.id.label.toLowerCase().includes(this.state.search.toLowerCase())){
          return item
      }
    }).map(item => 
      <div key={item.title.label} className="col-sm-12 col-md-3 col-lg-2 ">
        <div id={item.id.attributes['im:id']} className="container__movie">
          <div className="movies__img">
              <a href={item.id.label}>
                <img src={item['im:image'][2].label} alt={item.title.label} />
              </a>
          </div>
          <div className="movies__title">
              {item.title.label}
          </div>
          <div className="movies__category">
              {item.category.attributes.term}
          </div>
          <div className="movies__link on--mobile">
            <a href={item.id.label}>Więcej</a>
          </div>
        </div>
      </div>);
    return (
      <section className="movies">
        <MainHeading>
          Filmy - Top100
        </MainHeading>
        <div className="movies__search">
          Wyszukaj w top100:   <input type="text" placeholder="Wpisz nazwę..." onChange={(e)=>this.searchSpace(e)} />
        </div>
        <FadeInDiv className="container movies__container">
          <div className="row">
            {itemInfo}
          </div>
        </FadeInDiv>
      </section>
    );
  }
}

export default Top100;