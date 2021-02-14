import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Music.css'
// import Gallery2 from "../Images/musicgallery2.jpg";
export default function Music() {
       return (
              <div className="music" id="music">
                     <div className="MusicHeading">
                            <h1 className="MusicHeadingText">Music</h1>
                     </div>
                     <div className="ImageGallery">
                            <div className="imageCard">
                                   <div className="imgSection">
                                          {/* <img src={Gallery2} alt="" className= /> */}
                                   </div>
                                   <div className="streamSection">
                                          <div className="Stream">
                                                 <ul className="listContainer">
                                                        <li className="list"><a href="">Stream</a>
                                                               <ul>
                                                                      <li className="co-list"><a target="_blank" href="https://open.spotify.com/artist/7BPsblsOFnvBDMsP5Mv7xR">Shoptify</a></li>
                                                                      <li className="co-list"><a target="_blank" href="https://music.apple.com/us/artist/anything-but-human/1471603211">Apple Music</a></li>
                                                               </ul>
                                                        </li>
                                                 </ul>
                                          </div>
                                   </div>
                                   <div className="ViewAllButn">
                                          <Link to="/" className="viewAll">View All</Link>
                                   </div>
                            </div>
                     </div>
              </div>
       )
}
