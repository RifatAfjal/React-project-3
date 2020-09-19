import React from 'react';
import '../SetDestination/Home.css';
import { Col, Container, Row } from 'react-bootstrap';
import TourDetails from '../SetDestination/TourDetails';

const Formula = ( props ) => {
    return (
        <div className="homeContainer">
            <Container className="homeInfo">
                <Row>
                    <Col lg={7}>
                        <div className="text-white">
                            <h1>{props.placeName}</h1>
                            <p>{props.description}</p>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <TourDetails />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Formula;