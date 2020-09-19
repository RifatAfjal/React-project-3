import React, { useState } from 'react';
import './Authentication.css';
import { Button, Grid,makeStyles} from '@material-ui/core';
import google from '../../Image/google.png';
import facebook from '../../Image/fb.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import FirebaseConfig from '../../FirebaseConfig';

firebase.initializeApp(FirebaseConfig);

const useStyles = makeStyles({
    btnStyle: {
        width:"300px",
        borderRadius:"50px",
        border:"1px solid lightgray",
        padding:"10px 20px",
        "&:focus":{
            outline:"none",
        }
    }
})

const SingInOptions = () => {
    const classes = useStyles();
    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        email: "",
        photo: ""
    });
    const provider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleFacebookSignIn = () => {
        firebase.auth().signInWithPopup(fbProvider)
        .then(res => {
          const {displayName,email,photoURL} = res.user;
          const signInUser = {
              isSignedIn: true,
              name: displayName,
              email: email,
              photo: photoURL
          }
          setUser(signInUser)
          console.log(signInUser)
        })
        .catch(error => {
            const errorMessage = error.message
            alert(errorMessage)
        });
    }
    
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
         .then(res => {
            const {displayName,email,photoURL}= res.user;
            const signInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL
            }
            setUser(signInUser)
          })
         .catch(error => {
            const errorMessage = error.message;
            alert(errorMessage)
          });
    }
    return (
        <Grid container direction="column" className="extraContainer">
           <div className="otherAuth">
               <div className="line"></div>
               <span>Or</span>
               <div className="line"></div>
           </div>
            <Button
                className={classes.btnStyle}
                style={{marginBottom:"10px"}}
                startIcon={<img src={facebook} className="button" alt="facebook" />}
                onClick={handleFacebookSignIn}>
                  Continue with Facebook
            </Button>
            <Button
                className={classes.btnStyle}
                startIcon={<img src={google} className="button" alt="google" />}
                onClick={handleGoogleSignIn}>
                   Continue with Google
            </Button>
        </Grid>
    );
};

export default SingInOptions;