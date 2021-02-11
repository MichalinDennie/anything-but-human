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
                            <div className="firstpartOfGallery">
                                   <div className="WideImage">
                                          <img className="galleryimage" src={Gallery1} alt="" />
                                   </div>
                                   <div className="shortimage">
                                          <img className="galleryimage" src={Gallery2} alt="" />
                                   </div>
                            </div>
                            <div className="secondpartOfGallery">
                                   <div className="shortimage">
                                          <img className="galleryimage" src={Gallery4} alt="" />
                                   </div>
                                   <div className="WideImage">
                                          <img className="galleryimage" src={Gallery3} alt="" />
                                   </div>

                            </div>
                     </div>
              </div>
       )
}
