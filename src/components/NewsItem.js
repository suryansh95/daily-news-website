import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem;" }}>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm"
          >
            <img
              src={
                !imageUrl
                  ? "https://images.news18.com/ibnlive/uploads/2022/05/super-earth-165364836416x9.jpg"
                  : imageUrl
              }
              className="card-img-top"
              alt={title}
            />
          </a>

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
