import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../ComponentCss/Hvttourcard.css';
import ScrollTop from './ScrollTop.jsx';
import axios from'axios'

const Hvttourcard = () => {

  const [tours, setTour] =useState([]);
  
  
  // Example API endpoint
  const apiUrl = 'http://localhost:8080/destination';  
  axios.get(apiUrl)
  .then(response => {    
    console.log(setTour( response.data));
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  console.log(tours ,"fuck fuck fuck")
  


  return (
    <section className="bg-light mt-4 p-5">
      <div className="container">
        <ScrollTop /> {/* Ensure ScrollTop is within the same parent as your tour cards */}
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="fw-bold fs-1">
              Our
              <span className="main-hover"> Destinations </span>
            </h2>
          </div>
        </div>
        <div className="row">
          {tours.map((tour, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
              <Card className="h-100">
                <Card.Img variant="top" src={tour.imgSrc} className="card-img-top" />
                <Card.Body className="card-body d-flex flex-column">
                  <Card.Title className="card-title text-center">{tour.title}</Card.Title>
                  <div className="d-flex justify-content-center mt-auto">
                    <Link to={`/tour/${tour.id}`}>
                      <Button variant="primary" className="explore-btn">EXPLORE</Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hvttourcard;
