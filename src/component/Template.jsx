import "../pages/Home.css";

function Template({ image, title }) {
  return (
    <>
      <div className="col-md-3 mb-4">
        <div className=" card-container p-4">
          <img src={image} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Template;
