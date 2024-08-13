import React from "react";
import Carousel from "../component/Carousel";
import PopularDestinations from "../component/PopularDestinations";

import Template from "../component/Template";
import Quality from '../assets/Quality.png';
import Secure from '../assets/Secure.png';
import Support from '../assets/Support.png';
import Location from '../assets/Location.png';
import "./Home.css";
import Waitlist from "../component/Waitlist";

const Services = [
  {
    title: '24/7 Support',
    image: Support
  },
  {
    title: 'Secure Transaction',
    image: Secure
  },
  {
    title: 'Quality Assurance',
    image: Quality
  },
  {
    title: 'Location Specific Service Provider',
    image: Location
  }
];

function Home() {
  return (
    <>
    <div id="home">
      <Carousel  />
      </div>
      <div id="destinations">
      <PopularDestinations  />
      </div>
      <div className="whyus" id="about">
        <h1 className="mt-4">Why Us?</h1>
        <div className="container mt-4">
          <div className="row">
            {Services.map((service, index) => (
              <Template key={index} title={service.title} image={service.image} />
            ))}
          </div>
        </div>
      </div>
      <Waitlist/>
    </>
  );
}

export default Home;
