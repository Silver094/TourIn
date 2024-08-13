import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home'
import TravelSurvey from './pages/TravelSurvey';
import Nav from './component/Nav';
import Footer from './component/Footer'
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/travelSurvey" element={<TravelSurvey />} />
    </Routes>
  <Footer/>
  </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
