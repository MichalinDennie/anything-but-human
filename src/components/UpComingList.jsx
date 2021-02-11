import React from 'react'
import '../Styles/UpcomingList.css'
import CardImage1 from "../Images/card1.jpg";
import CardImage2 from "../Images/card2.jpg";
import CardImage3 from "../Images/card3.jpg";
import CardImage4 from "../Images/card4.jpg";

export default function UpComingShows() {
       return (
              <div className="upcominglist" >
                     <div className="upComingHeading">
                            <h1 className="upComingHeadingText">UPCOMING SHOWS</h1>
                     </div>
                     <div className="listcontainer">
                            <div className="card">
                                   <img src={CardImage1} className="cardImage" alt="" />
                            </div>
                            <div className="card">
                                   <img src={CardImage2} className="cardImage" alt="" />
                            </div>
                            <div className="card">
                                   <img src={CardImage3} className="cardImage" alt="" />
                            </div>
                            <div className="card">
                                   <img src={CardImage4} className="cardImage" alt="" />
                            </div>
                     </div>
                     {/* <div className="headerImageLogo">
                            <img src={Logo} className="imagebanner" alt="" />
                     </div> */}
              </div>
       )
}
