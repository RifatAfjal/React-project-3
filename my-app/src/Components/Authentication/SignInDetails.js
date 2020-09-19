import React, {useContext, useState} from 'react';
import './Authentication.css';
import {TextField, Checkbox,FormControlLabel, Button, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SingIn from './SingInOptions';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
// import { UserContext } from '../../App';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '500',
    },
  },
  setMargin: {
    marginTop:"150px",
    marginBottom:"50px"
  }
}));

const SignInDetails = () => {
    const classes = useStyles();
    // const [loggedInUser,setLoggedInUser] = useState(UserContext);
    const [user, setUser] = useState ({
        isSignedIn: false,
        email: "",
        password: "",
        error: ""
       });
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    let formValid = false;
    const handleBlur = (e) => {
        if(e.target.name === "email"){
          formValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e.target.value);
        }
        if(e.target.name === "password"){
           formValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(e.target.value);
        }
        if(formValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
        e.preventDefault();
    }

    const handleSubmit = (e) => {
        if(user.email && user.password){
          firebase.auth().signInWithEmailAndPassword(user.email, user.password)
          .then(res =>{
              const newUserInfo = {...user};
              newUserInfo.isSignedIn = true;
              setUser(newUserInfo);
              setLoggedInUser(newUserInfo)
              history.replace(from);
          })
          .catch(error => {
              const newUserInfo = {...user}
              newUserInfo.isSignedIn = false;
              setUser(newUserInfo);
            });
        }
        e.preventDefault()
    }
  return (
      <>
    <Container maxWidth="lg" className={classes.setMargin}> 
        <div className="suck">
        <div className="loginForm">
            <Typography variant="h4">
                Login
            </Typography>
            <form className={classes.root} onSubmit={handleSubmit}>
                <Grid container direction="column" >
                    <TextField
                        label="Username or Email"
                        type="email"
                        name="email"
                        required
                        onBlur={handleBlur}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        name="password"
                        required
                        onBlur={handleBlur}
                    />
                    <Grid container direction="row" justify="space-between">
                        <FormControlLabel
                            control={
                            <Checkbox
                                color="primary"
                            />
                            }
                            label="Remember"
                        />
                        <Typography align="center" style={{marginTop:"10px"}}>
                          <Link to="/" style={{color:"gold"}}>Forgot Password</Link>
                            
                        </Typography>
                    </Grid>
                    <Button variant="contained" color="primary" type="submit">
                        LogIn
                    </Button>
                </Grid>
            </form>
            <Typography align="center" style={{marginTop:"10px"}}>
                {
                    user.isSignedIn?"Login successfully":"User email or password isn't valid"
                }
            </Typography>
            <Typography align="center" style={{marginTop:"10px"}}>
                Don't have an account? 
                <Link to="/signup" style={{color:"gold",textDecoration:"none"}}>
                   Create an account
                </Link>
            </Typography>
        </div>
        </div>
        <SingIn />
    </Container>
    </>
  );
}

export default SignInDetails;