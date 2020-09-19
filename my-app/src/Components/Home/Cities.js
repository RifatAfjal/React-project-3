import React from 'react';
import CitiesDetails from './CitiesDetails';
import { Col, Container, Row } from 'react-bootstrap';
import './Slick.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Cities = () => {
  return (
    <>
    <div className="banner">
      <Container className="suck">
        <Row className="nuck">
            <Col lg={5} className="text-white">
                  <h1>{CitiesDetails[0].cityName}</h1>
                  <p>{CitiesDetails[0].description}</p>
                  <Link to={`/place/${CitiesDetails[0].title}`}>
                      <button className="btn btn-warning">
                        <span className="mr-2">BOOKING </span>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                  </Link>
            </Col>
          <Col  >
            <Row>
            {
              CitiesDetails.map( cityData => {
                return(
                  <Col lg={4} key={cityData.id}>
                    <Link to={`/place/${cityData.title}`}>
                      <div className="cardImage">
                        <img
                          src={cityData.image}
                          alt="First slide"
                        />
                        <div className="overlay"></div>
                        <h1>{cityData.cityName}</h1>
                      </div>
                      </Link>
                  </Col>
                )    
              })
            }
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
  
}

