import React  from "react";

const NewsItem  = (props) => {
 
    let { title, description, imageUrl, newsUrl } = props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem;" }}>
          <a
            href={newsUrl}
            target="_blank noreferrer"
            rel="noreferrer"
            className="btn btn-sm"
          >
            <img
              src={
                !imageUrl
                  ? "https://images.news18.com/ibnlive/uploads/2022/05/super-earth-165364836416x9.jpg"
                  :
                   imageUrl
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

export default NewsItem;
