import React from 'react'
import '../Styles/Home.css'
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../Images/LogoImage.png";


export default function Home() {
       return (
              <div className="HomeContainer" id="home">

                     <div className="main">
                            <div className="side col-1">

                            </div>
                            <div className="header col-10">
                                   <button className="BTNs" >
                                          <Link className="BTNsLink" smooth to="#news">News</Link>
                                   </button>
                                   <button className="BTNs" >
                                          <Link className="BTNsLink" smooth to="#music">Music</Link>
                                   </button>
                                   <button className="BTNs" >
                                          <Link className="BTNsLink" smooth to="#video">Videos</Link>
                                   </button>
                                   <button className="BTNs" >
                                          <a className="BTNsLink" target="_blank" href="https://www.freshbakedtees.com/anything-but-human">Merch</a>
                                   </button>
                            </div>
                            <div className="side col-1">
                                   <button>
                                          <Link to="/auth" className="signUp">Sign Up</Link>
                                   </button>
                            </div>
                     </div>
                     <div className="headerImageLogo">
                            <img src={Logo} className="imagebanner" alt="" />
                     </div>

              </div>
       )
}
