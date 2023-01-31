import React from "react";

const NewsItem = (props)=> {

    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imageUrl? "https://images.unsplash.com/photo-1622977265115-cce36eb43f18?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8aW1nfHx8fHx8MTY3MTcwNTg2Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}<br></br><span className="badge bg-secondary">{source}</span></h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target = "_blank" className="btn  btn-sm btn-secondary">Read more</a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
