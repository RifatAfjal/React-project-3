import React, { useState } from 'react';
import './Authentication.css';
import {TextField , Button, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SingIn from './SingInOptions';
import * as firebase from "firebase/app";
import "firebase/auth";
import { Link } from 'react-router-dom';


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

const SignUpDetails = () => {
  const classes = useStyles();
  const [password,setPassword] = useState();

  const [user, setUser] = useState ({
    isSignedIn: false,
    fname: "",
    lname: "",
    email: "",
    conPassword: "",
    error: ""
   });

  // const handleSignOUt = () => {
  //     firebase.auth().signOut()
  //     .then(res => {
  //         const signOutUser ={
  //           isSignedIn: false,
  //           fname: "",
  //           lname: "",
  //           email: "",
  //           conPassword: "",
  //           error: "",
  //           successful: false,
  //         }
  //         setUser(signOutUser)
  //     })
  // }

  const updateUserInfo = (fname, lname) => {
    var user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: `${fname} ${lname}`,
    })
    .then(function() {
      console.log('upadated successfully')
    }).catch(function(error) {
       console.log(error)
    });
  }
  let formValid;
  const handleBlur = (e) => {
      
      if(e.target.name === "fname"){
        formValid = /^[a-zA-Z ]{3,15}$/.test(e.target.value);
      }
      if(e.target.name === "lname"){
        formValid = /^[a-zA-Z ]{3,15}$/.test(e.target.value);
      }
      if(e.target.name === "email"){
        formValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e.target.value);
      }
      if(e.target.name === "password"){
        formValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(e.target.value);
        if(formValid){
            setPassword(e.target.value);
          }
      }
      if(e.target.name === "conPassword"){
         if(e.target.value === password){
            formValid= true;
         }
      }
      if(formValid){
          const newUserInfo = {...user};
          newUserInfo[e.target.name] = e.target.value;
          setUser(newUserInfo)
      }
  }
  const handleSubmit = (e) => {
      if(user.email && user.conPassword){
        firebase.auth().createUserWithEmailAndPassword(user.email, user.conPassword)
        .then(res =>{
            const newUserInfo = {...user};
            newUserInfo.error= "";
            newUserInfo.successful = true;
            setUser(newUserInfo);
            updateUserInfo(user.fname,user.lname);
        })
        .catch(error => {
            const newUserInfo = {...user}
            newUserInfo.error = error.message;
            newUserInfo.successful = false;
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
                Create Account
            </Typography>
            <form className={classes.root} onSubmit={handleSubmit}>
                <Grid container direction="column" >
                    <TextField
                        label="First Name"
                        name="fname"
                        type="text"
                        required
                        onBlur={handleBlur}
                    />
                    <TextField
                        label="Last Name"
                        name="lname"
                        type="text"
                        required
                        onBlur={handleBlur}
                    />
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
                    <TextField
                        label="Confirm Password"
                        type="password"
                        name="conPassword"
                        helperText="Incorrect entry."
                        required
                        onBlur={handleBlur}
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Create an account
                    </Button>
                </Grid>
            </form>
            <Typography
               variant="body2"
               align="center" 
               color="secondary" 
               style={{marginTop:"10px"}}>
                 {user.error}
            </Typography>

            {
                user.successful &&
                <Typography variant="body2" 
                  align="center" 
                  color="primary" 
                  style={{marginTop:"10px"}}>
                 User created successfully
                </Typography>
            }

            <Typography 
              align="center" 
              style={{marginTop:"10px"}}>
              Already have an account?
              <Link to ="/login" style={{color:"goldenrod"}}> Login</Link>
            </Typography>
           
        </div>
        </div>
        <SingIn />
    </Container>
    </>
  );
}

export default SignUpDetails;
