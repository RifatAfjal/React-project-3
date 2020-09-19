import React from 'react';
import GoogleMap from './GoogleMap';
import Hotel from './Hotel';

const BookHotel = () => {
    return (
        <div className="container">
            <div className="row" style={{marginTop:"100px"}}>
                <Hotel/>
                <div className="col-6">
                <GoogleMap></GoogleMap>
                </div>
           </div>
        </div>
    );
};

export default BookHotel;