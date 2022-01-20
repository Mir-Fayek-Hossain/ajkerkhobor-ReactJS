import React, { Component } from 'react'
export default class NewsItem extends Component {
    render() {
        let{title,description,imageUrl,newsUrl,source,author,date}=this.props;
        return (
          <div className="card">
            <span
              className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
              style={{ left: "90%", zIndex: 1 }}
            >
              {source}
              <span className="visually-hidden">unread messages</span>
            </span>
            <img src={imageUrl} className="card-img-top" alt="..." style={{maxHeight:"200px"}}/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-footer text-muted">
                Published by {author} on {new Date(date).toGMTString()}
              </p>
              <a
                href={newsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary"
              >
                Read more
              </a>
            </div>
          </div>
        );
    }
}
