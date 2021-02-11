import React from 'react'
import '../Styles/Home.css'
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../Images/LogoImage.png";


export default function Home() {
       return (
              <div className="HomeContainer" id="home">
                     <div className="header">
                            <BrowserRouter>
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
                                          <Link className="BTNsLink" smooth to="#merch">Merch</Link>
                                   </button>
                            </BrowserRouter>
                     </div>
                     <div className="headerImageLogo">
                            <img src={Logo} className="imagebanner" alt="" />
                     </div>

              </div>
       )
}
