import React from 'react'
import '../Styles/Music.css'
import Gallery1 from "../Images/musicgallery1.jpg";
import Gallery2 from "../Images/musicgallery2.jpg";
import Gallery3 from "../Images/musicgallery3.jpg";
import Gallery4 from "../Images/musicgallery4.jpg";
export default function Music() {
       return (
              <div className="music" id="music">
                     <div className="MusicHeading">
                            <h1 className="MusicHeadingText">Music</h1>
                     </div>
                     <div className="ImageGallery">
                            <div className="imageCard">
                                   <div className="imgSection">
                                          <img src={Gallery2} alt="" />
                                   </div>
                                   <div className="streamSection">
                                          <select>
                                                 <option></option>
                                          </select>
                                   </div>
                            </div>
                     </div>
              </div>
       )
}
