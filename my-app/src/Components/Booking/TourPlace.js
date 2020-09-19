import React from 'react';
import { useParams } from 'react-router-dom';
import Formula from './Formula';
import PlaceDetails from './PlaceDetails';

const TourPlace = () => {
    const {title} = useParams();
    const getPlaceDetails = PlaceDetails.find(city => city.title === title);
    console.log(getPlaceDetails);
    return (
        <>
           <Formula 
               placeName={getPlaceDetails.placeName}
               description={getPlaceDetails.description}
           /> 
        </>
    );
};

export default TourPlace;