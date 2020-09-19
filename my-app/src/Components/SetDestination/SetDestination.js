import React from 'react';
import './Home.css';
import { Col, Container, Row } from 'react-bootstrap';
import DestinationDetails from './DestinationDetails';
import TourDetails from './TourDetails';

const SetDestination = () => {
    return (
        <div className="homeContainer">
            <Container className="homeInfo">
                <Row>
                    <Col lg={7}>
                        <DestinationDetails/>
                    </Col>
                    <Col lg={5}>
                        <TourDetails/> 
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SetDestination;