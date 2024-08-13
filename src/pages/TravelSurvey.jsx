import React, { useState,useRef } from "react";
import { useNavigate } from "react-router-dom";

function TravelSurvey(){
  const [formData, setFormData] = useState({
    travelerType: "",
    destinations: [],
    travelPace: "",
    budget: "",
    accommodation: "",
    activities: [],
    planningStyle: "",
    travelFrequency: "",
    travelValues: [],
    travelCompanyChoice: "",
    additionalComments: "",
  });
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: checked? [...prevState[name], value]: prevState[name].filter((v) => v !== value),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,[name]: value,
      }));
    }
  };
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    alert("Thank you!");
    console.log("Form Data:", formData);
    // formRef.current.reset();
    navigate("/");
    
  };

  return (
    <div className="container">
      <h2 className="my-4">Tell Us How You Travel!</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="travelerType" className="form-label">
                What type of traveler are you?
              </label>
              <select
                id="travelerType"
                className="form-select"
                name="travelerType"
                onChange={handleChange}
              >
                <option value="">Select...</option>
                <option value="Solo Traveler">Solo Traveler</option>
                <option value="Couple/Romantic Getaway">
                  Couple/Romantic Getaway
                </option>
                <option value="Family Vacationer">Family Vacationer</option>
                <option value="Group Traveler">Group Traveler</option>
                <option value="Business Traveler">Business Traveler</option>
                <option value="Adventure Seeker">Adventure Seeker</option>
                <option value="Relaxation Enthusiast">
                  Relaxation Enthusiast
                </option>
                <option value="Cultural Explorer">Cultural Explorer</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="travelPace" className="form-label">
                What is your preferred travel pace?
              </label>
              <select
                id="travelPace"
                className="form-select"
                name="travelPace"
                onChange={handleChange}
              >
                <option value="">Select...</option>
                <option value="Fast-paced">Fast-paced</option>
                <option value="Balanced">Balanced</option>
                <option value="Slow and relaxed">Slow and relaxed</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="budget" className="form-label">
                What is your usual travel budget?
              </label>
              <select
                id="budget"
                className="form-select"
                name="budget"
                onChange={handleChange}
              >
                <option value="">Select...</option>
                <option value="Budget Traveler">Budget Traveler</option>
                <option value="Mid-Range Traveler">Mid-Range Traveler</option>
                <option value="Luxury Traveler">Luxury Traveler</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="accommodation" className="form-label">
                What kind of accommodation do you prefer?
              </label>
              <select
                id="accommodation"
                className="form-select"
                name="accommodation"
                onChange={handleChange}
              >
                <option value="">Select...</option>
                <option value="Budget Hotels/Hostels">
                  Budget Hotels/Hostels
                </option>
                <option value="Mid-Range Hotels">Mid-Range Hotels</option>
                <option value="Luxury Hotels/Resorts">
                  Luxury Hotels/Resorts
                </option>
                <option value="Vacation Rentals">Vacation Rentals</option>
                <option value="Boutique Hotels">Boutique Hotels</option>
                <option value="Eco-Friendly Accommodations">
                  Eco-Friendly Accommodations
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">
            What kind of destinations do you prefer?
          </label>
          <div className="form-check">
            {[
              "Beaches",
              "Mountains",
              "Cities",
              "Countryside",
              "Historical Sites",
              "Wildlife/Nature Reserves",
              "Adventure Spots",
              "Cultural Hubs",
            ].map((destination) => (
              <div key={destination} className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={destination}
                  value={destination}
                  name="destinations"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor={destination}>
                  {destination}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">
            What are your favorite travel activities?
          </label>
          <div className="form-check">
            {[
              "Sightseeing",
              "Adventure Sports",
              "Relaxing by the beach/pool",
              "Cultural Experiences",
              "Food and Culinary Tours",
              "Shopping",
              "Wildlife Safaris",
              "Wellness and Spa",
            ].map((activity) => (
              <div key={activity} className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={activity}
                  value={activity}
                  name="activities"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor={activity}>
                  {activity}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="planningStyle" className="form-label">
                How do you prefer to plan your trips?
              </label>
              <select
                id="planningStyle"
                className="form-select"
                name="planningStyle"
                onChange={handleChange}
              >
                <option value="">Select...</option>
                <option value="Plan everything in advance">
                  Plan everything in advance
                </option>
                <option value="Mix of planned and spontaneous">
                  Mix of planned and spontaneous
                </option>
                <option value="Flexible itinerary">Flexible itinerary</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="travelFrequency" className="form-label">
                How often do you travel?
              </label>
              <select
                id="travelFrequency"
                className="form-select"
                name="travelFrequency"
                onChange={handleChange}
              >
                <option value="">Select...</option>
                <option value="Once a year">Once a year</option>
                <option value="2-3 times a year">2-3 times a year</option>
                <option value="4-5 times a year">4-5 times a year</option>
                <option value="More than 5 times a year">
                  More than 5 times a year
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">
            What do you value most in a travel experience?
          </label>
          <div className="form-check">
            {[
              "Comfort and Luxury",
              "Adventure and Thrill",
              "Authentic Local Experiences",
              "Cultural Immersion",
              "Convenience and Ease of Travel",
              "Eco-Friendly Practices",
              "Affordability",
            ].map((value) => (
              <div key={value} className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={value}
                  value={value}
                  name="travelValues"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor={value}>
                  {value}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="travelCompanyChoice" className="form-label">
            What’s the most important factor when choosing a travel company?
          </label>
          <select
            id="travelCompanyChoice"
            className="form-select"
            name="travelCompanyChoice"
            onChange={handleChange}
          >
            <option value="">Select...</option>
            <option value="Personalized Service">Personalized Service</option>
            <option value="Price and Value for Money">
              Price and Value for Money
            </option>
            <option value="Reputation and Reviews">
              Reputation and Reviews
            </option>
            <option value="Sustainable Travel Practices">
              Sustainable Travel Practices
            </option>
            <option value="Quality of Accommodations and Tours">
              Quality of Accommodations and Tours
            </option>
            <option value="Customer Support">Customer Support</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="additionalComments" className="form-label">
            Any additional comments?
          </label>
          <textarea
            id="additionalComments"
            className="form-control"
            name="additionalComments"
            rows="4"
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-secondary bg-dark ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TravelSurvey;
