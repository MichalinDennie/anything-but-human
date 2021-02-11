import React from 'react';
import "../Styles/News.css";
import { Link } from "react-router-dom";

export default function News() {
       return (
              <div className="News" id="news">
                     <div className="NewsHeading">
                            <h1 className="NewsHeadingText">NEWS</h1>
                     </div>
                     <div className="NewsContent">
                            <div className="NewsCards">
                                   <div className="card1">
                                          <div className="HeadingNews">
                                                 <h3 className="HeadingText">MasterClass Follows the Beat with Legendary Drummer Sheila E.</h3>
                                          </div>
                                          <div className="middleContent">
                                                 <p className="NewsParagraph">
                                                        MasterClass, the streaming platform that makes it possible for anyone to learn from the best, today announced that Emmy and Drammey nominated Queen of Percussion, Sheila E. will teach its first class on drumming and precussion.
                                                        Through a series of dynamic lessons, Sheila E. will help members find thier rythm, explore the fundamentals of precission [...]
                                                 </p>
                                          </div>
                                   </div>
                                   <div className="card2">
                                          <div className="HeadingNews">
                                                 <h3 className="HeadingText">MasterClass Follows the Beat with Legendary Drummer Sheila E.</h3>
                                          </div>
                                          <div className="middleContent">
                                                 <p className="NewsParagraph">
                                                        MasterClass, the streaming platform that makes it possible for anyone to learn from the best, today announced that Emmy and Drammey nominated Queen of Percussion, Sheila E. will teach its first class on drumming and precussion.
                                                        Through a series of dynamic lessons, Sheila E. will help members find thier rythm, explore the fundamentals of precission [...]
                                                 </p>
                                          </div>
                                   </div>
                                   <div className="card3">
                                          <div className="HeadingNews">
                                                 <h3 className="HeadingText">MasterClass Follows the Beat with Legendary Drummer Sheila E.</h3>
                                          </div>
                                          <div className="middleContent">
                                                 <p className="NewsParagraph">
                                                        MasterClass, the streaming platform that makes it possible for anyone to learn from the best, today announced that Emmy and Drammey nominated Queen of Percussion, Sheila E. will teach its first class on drumming and precussion.
                                                        Through a series of dynamic lessons, Sheila E. will help members find thier rythm, explore the fundamentals of precission [...]
                                                 </p>
                                          </div>
                                   </div>
                            </div>
                            <div className="ViewAllBtn">
                                   <Link to="/news-page" className="viewAll">View All</Link>
                            </div>
                     </div>
              </div>
       )
}
