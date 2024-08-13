import React from 'react';
import Cards from './Cards';
import kedarnath from '../assets/kedarnath.png';
import Andaman from '../assets/Andaman.png';
import Kerla from '../assets/Kerla.png';
import Sikkim from '../assets/Sikkim.png';

const cardsData = [
  {
    title: 'Kedarnath',
    text: 'Feeling blessed to witness the divine beauty of Kedarnath.',
    lastUpdated: '3 mins',
    image:kedarnath
  },
  {
    title: 'Andaman',
    text: 'Explore the beauty of the Andaman Islands. This content is a little bit longer.',
    lastUpdated: '5 mins',
    image:Andaman
  },
  {
    title: 'Sikkim',
    text: 'Sikkim is known for its breathtaking landscapes and serene environment.',
    lastUpdated: '10 mins',
    image:Sikkim
  },
  {
    title: 'Kerala',
    text: 'Kerala, God’s Own Country, is known for its beautiful backwaters and lush greenery.',
    lastUpdated: '15 mins',
    image:Kerla
  }
];

function PopularDestinations() {
  return (
    <div className="container-fluid p-0" style={{ backgroundColor: 'white' }}>
      <div className="container py-5">
        <div className="row">
          <h2 className="mb-4" >Popluar Destinations: </h2>
          {cardsData.map((card, index) => (
            <div className="col-lg-6 col-md-12 mb-4" key={index}>
              <Cards 
                title={card.title}
                text={card.text}
                image={card.image}
                lastUpdated={card.lastUpdated}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularDestinations;
