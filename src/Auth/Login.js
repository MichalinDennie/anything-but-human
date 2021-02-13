import React, { useEffect, useState } from 'react'
import '../Styles/Login.css'
import firebase from '../Config/firebase'
import Logo from "../Images/LogoImage.png";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Login(props) {

       const [user, setUser] = useState('')
       const [email, setEmail] = useState('')
       const [password, setPassword] = useState('')
       const [emailError, setEmailError] = useState('')
       const [passwordError, setPasswordError] = useState('')
       const [hasAccount, setHasAccount] = useState(false);

       const clearInputs = () => {
              setEmail('')
              setPassword('')
       }
       const clearErrors = () => {
              setEmailError('')
              setPasswordError('')
       }


       const SignInFunc = () => {
              clearErrors();
              firebase.auth().signInWithEmailAndPassword(email, password)
                     .catch((error) => {
                            switch (error.code) {
                                   case "auth/invalid-email":
                                   case "auth/user-disabled":
                                   case "auth/user-not-found":
                                          setEmailError(error.message);
                                          break;
                                   case "auth/wrong-password":
                                          setPasswordError(error.message);
                                          break;
                            }
                     });
       }
       const SignUpFunc = () => {
              clearInputs()
              firebase.auth().createUserWithEmailAndPassword(email, password)
                     .catch((error) => {
                            switch (error.code) {
                                   case "auth/email-already-in-use":
                                   case "auth/invalid-email":
                                          setEmailError(error.message);
                                          break;
                                   case "auth/waek-password":
                                          setPasswordError(error.message);
                                          break;
                            }
                     });
       }
       const LogOutFunc = () => {
              firebase.auth().signOut()
       }

       const authenticationListner = () => {
              firebase.auth().onAuthStateChanged((user) => {
                     if (user) {
                            clearInputs();
                            setUser(user)
                     }
                     else {
                            setUser("")
                     }
              })
       }

       useEffect(() => {
              authenticationListner()
       }, [])

       // const { email, setEmail, password, setPassword, SignUpFunc, SignInFunc, hasAccount, setHasAccount, emailError, passwordError } = props;

       return (
              <div>
                     <div className="headerImageLogo">
                            <Link to="/">
                                   <img src={Logo} className="imagebanner" alt="" />
                            </Link>
                     </div>
                     <div className="login">
                            <div className="LoginContainer">
                                   <label className="labels">Email </label><br />
                                   <input
                                          className="Inputs"
                                          type="text"
                                          autoFocus
                                          required
                                          value={email}
                                          placeholder="Enter your name"
                                          onChange={(e) => setEmail(e.target.value)}
                                   />
                                   <p className="errorMessage">{emailError}</p>

                                   <label className="labels">Password </label><br />
                                   <input
                                          className="Inputs"
                                          type="password"
                                          required
                                          value={password}
                                          placeholder="Enter your password"
                                          onChange={(e) => setPassword(e.target.value)}
                                   />
                                   <p className="errorMessage">{passwordError}</p>

                                   <div className="btnContainer">
                                          {hasAccount ? (
                                                 <>
                                                        <button onClick={SignInFunc} className="btn"> Sign In </button>
                                                        <p className="para">Don't have an account ? <span className="togglebtn" onClick={() => setHasAccount(!hasAccount)}>Sign Up</span> </p>
                                                 </>
                                          ) : (
                                                        <>
                                                               <button onClick={SignUpFunc} className="btn">Sign Up</button>
                                                               <p className="para">Have an account ? <span className="togglebtn" onClick={() => setHasAccount(!hasAccount)}>Sign In</span> </p>
                                                        </>
                                                 )

                                          }
                                   </div>

                            </div>

                     </div>
                     <Footer />


              </div>

       )
}
