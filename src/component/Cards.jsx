import React from "react";

function Cards({ title, text, image, lastUpdated }) {
  return (
    <div 
      className="card mb-3" 
      style={{ 
        maxWidth: "100%", 
        height: "auto",
        margin: "0 auto" 
      }}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={image}
            className="img-fluid rounded-start"
            alt={title}
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "cover" 
            }}
          />
        </div>
        <div className="col-md-8 d-flex flex-column">
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <p className="card-text mt-auto">
              <small className="text-muted">Updated: {lastUpdated} ago</small>
            </p>
            <button type="button" className="btn">View more...</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
