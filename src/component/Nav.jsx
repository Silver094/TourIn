import React from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop -20, // Adjust for fixed navbar height
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand">
            <span style={{ color: "red" }}>Tour</span>
            <span style={{ color: "blueviolet" }}>In</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  type="button"
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => {
                    navigate("/");
                    scrollToSection("home");
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                type="button"
                  className="nav-link"
                  onClick={() => {
                    navigate("/");
                    scrollToSection("destinations")}}
                >
                  Destinations
                </a>
              </li>
              <li className="nav-item">
                <a
                type="button"
                  className="nav-link"
                  onClick={() => {
                    navigate("/");
                    scrollToSection("about")}}
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <button class="fab btn btn-secondary bg-dark rounded-pill p-3 shadow " id="fabButton"
          onClick={() => navigate("/travelSurvey")}>
          Take the Survey
        </button>
    </>
  );
}

export default Nav;
