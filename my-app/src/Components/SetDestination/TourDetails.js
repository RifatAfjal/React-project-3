import React,{useState} from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { useHistory } from 'react-router-dom';
import '../../../node_modules/react-datepicker/dist/react-datepicker.css'

const TourDetails = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [isOriginValid,setOriginValid] = useState(false);
    const [isDestinationValid, setDestinationValid] = useState(false);
    const history = useHistory()

    const today = new Date();
    let tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 2);
    
    const handleValidation = (e) =>{
        if(e.target.name === "origin" && e.target.value.length >= 3){
           const originIsValid = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test(e.target.value);
           setOriginValid(originIsValid)
        }
        if( e.target.name === "destination" && e.target.value.length >= 3){
          const  destinationIsValid  = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/.test(e.target.value);
          setDestinationValid(destinationIsValid)
        }
    }
    const proceedBooking = () => {
        history.push("/contact")
    }
    return (
        <>
            <Form className="bg-white text-dark rounded p-3">
                <Form.Group controlId="currentLocation">
                    <Form.Label >
                       Origin
                    </Form.Label>
                    <Form.Control 
                       type="text" 
                       name="origin" 
                       placeholder="Current Location"
                       onChange={handleValidation}
                    />
                    {
                        isOriginValid?
                        <p className="text-success">Origin is valid</p>:
                        <p className="text-danger">Origin is not valid</p>
                    } 
                </Form.Group>

                <Form.Group controlId="Destination">
                    <Form.Label >
                       Destination
                    </Form.Label>
                    <Form.Control type="text"
                      name="destination" 
                      placeholder="Destination place"
                      onChange={handleValidation}/>
                    {
                      isDestinationValid?
                      <p className="text-success">Destination is valid</p>:
                      <p className="text-danger">Destination is not valid</p>
                    }
                </Form.Group>

                <Form.Group className="row">
                    <Form.Group className="col-6" controlId="Start">
                        <Form.Label>
                           From
                        </Form.Label>
                        <DatePicker 
                           selected={startDate}
                           onChange={date => setStartDate(date)}
                           dateFormat="dd/MM/yyyy"
                           minDate={new Date()} 
                           showYearDropdown 
                           scrollableMonthYearDropdown
                        /> 
                    </Form.Group>
                
                    <Form.Group className="col-6" controlId="End">
                        <Form.Label>
                         To
                        </Form.Label>
                        <DatePicker 
                          selected={tomorrow}
                          onChange={date => setStartDate(date)}
                          dateFormat="dd/MM/yyyy" 
                          minDate={new Date()} 
                          showYearDropdown scrollableMonthYearDropdown
                        /> 
                    </Form.Group>
                    </Form.Group>
                <Form.Control type="submit" className="bg-warning" onClick={proceedBooking}/>
            </Form>
        </>
    );
};

export default TourDetails;