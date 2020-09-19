import React from 'react';
import img1 from '../../Image/Rectangle 26.png';
import img2 from '../../Image/Rectangle 27.png';
import img3 from '../../Image/Rectangle 28.png';

const Hotel = () => {
    return (
        <div className="col-6">
            <div className="row">
                <div className="col-12 mb-3">
                    <div className="row">
                        <div className="col-6">
                            <img src={img1} alt="" className="w-100 h-100"/>
                        </div>
                        <div className="col-6">
                            <h5>Light bright airy stylish apt & safe pleaceful stay.</h5>
                            <p>4 guests 2 bedrooms 2beds 2baths</p>
                            <p>cancellation flexibility available</p>
                            <button className="btn btn-success" >Book</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 mb-3">
                    <div className="row">
                        <div className="col-6">
                            <img src={img2} alt="" className="w-100 h-100"/>
                        </div>
                        <div className="col-6">
                            <h5>Light bright airy stylish apt & safe pleaceful stay.</h5>
                            <p>4 guests 2 bedrooms 2beds 2baths</p>
                            <p>cancellation flexibility available</p>
                            <button className="btn btn-success" >Book</button>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-6">
                            <img src={img3} alt="" className="w-100 h-100"/>
                        </div>
                        <div className="col-6">
                            <h5>Light bright airy stylish apt & safe pleaceful stay.</h5>
                            <p>4 guests 2 bedrooms 2beds 2baths</p>
                            <p>cancellation flexibility available</p>
                            <button className="btn btn-success" >Book</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;