import React, { createContext,useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SignIn from './Components/Authentication/SignIn';
import SignUp from './Components/Authentication/SignUp';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import { Cities } from './Components/Home/Cities'
import TourPlace from './Components/Booking/TourPlace';
import SignUpDetails from './Components/Authentication/SignUpDetails';
import PrivateRoute from './Components/PrivateRoute';
import BookHotel from './Components/BookHotel.js/BookHotel';
import SetDestination from './Components/SetDestination/SetDestination';
import Eror from './Components/Eror';

export const UserContext = createContext();
const App = () => {
  const [loggedInUser,setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Navigation></Navigation>
      <Router>
        <Switch>
            <Route exact path="/">
              <Cities />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/destination">
              <SetDestination />
            </Route>
            <Route path="/news">
              <Cities />
            </Route>
            <Route path="/blog">
              <SignUpDetails />
            </Route> 
            <PrivateRoute path="/contact">
               <BookHotel />
            </PrivateRoute>
            <Route path="/login">
              <SignIn />
            </Route>
            <Route path="/place/:title">
              <TourPlace />
            </Route>
            <Route path="*">
              <Eror />
            </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
