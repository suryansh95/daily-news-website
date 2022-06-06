import React, { Component } from "react";
import Marquee from "./Marquee";

export class MarqueeHead extends Component {
  articles = [];
  constructor() {
    super();

    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=37185646fc744a7899ae2bbc7a913c16";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container my-4 ">
       
        <div className="colum">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <Marquee
                  title={element.title}
               
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MarqueeHead;