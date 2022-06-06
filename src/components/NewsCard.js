import React, { Component } from "react";

export class NewsCard extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      // <div className="card" style={{ width: "1rem;" }}>
      //   <img
      //     src={
      //       !imageUrl
      //         ? "https://images.news18.com/ibnlive/uploads/2022/05/super-earth-165364836416x9.jpg"
      //         : imageUrl
      //     }
      //     className="card-img-top"
      //     alt={title}
      //   />
      //   <div className="card-body">
      //     <h5 className="card-title">{title}</h5>
      //     <p className="card-text">{description}</p>
      //     <a
      //       href={newsUrl}
      //       target="_blank"
      //       rel="noreferrer"
      //       className="btn btn-primary"
      //     >
      //       Go somewhere
      //     </a>
      //   </div>
      // </div>


//       <div class="card" style={{width: "10rem;"}}>
//   <img src="..." class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="/" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
<div class="card" style={{width: "10rem;"}}>
  {/* <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul> */}
  <marquee width="100%" direction="left" height="100px">
This is a sample scrolling text that has scrolls texts to left.
</marquee>
</div>
    );
  }
}

export default NewsCard;
