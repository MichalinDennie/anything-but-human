import React, { useState } from 'react'
import '../Styles/UpcomingList.css'
import CardImage1 from "../Images/card1.jpg";
import CardImage2 from "../Images/card2.jpg";
import CardImage3 from "../Images/card3.jpg";
import CardImage4 from "../Images/card4.jpg";
import Modal from 'react-modal'
import { Link } from 'react-router-dom';


Modal.setAppElement("#root")
export default function UpComingShows() {

       const [modaIIsOpen1, setModaIIsOpen1] = useState(false)
       const [modaIIsOpen2, setModaIIsOpen2] = useState(false)
       const [modaIIsOpen3, setModaIIsOpen3] = useState(false)
       const [modaIIsOpen4, setModaIIsOpen4] = useState(false)
       return (
              <>
                     <div className="upcominglist" >
                            <div className="upComingHeading">
                                   <h1 className="upComingHeadingText">UPCOMING SHOWS</h1>
                            </div>
                            <div className="listcontainer">
                                   <div className="card" onClick={() => setModaIIsOpen1(true)}>
                                          <img src={CardImage1} className="cardImage" alt="" />
                                   </div>
                                   <div className="card" onClick={() => setModaIIsOpen2(true)}>
                                          <img src={CardImage2} className="cardImage" alt="" />
                                   </div>
                                   <div className="card" onClick={() => setModaIIsOpen3(true)}>
                                          <img src={CardImage3} className="cardImage" alt="" />
                                   </div>
                                   <div className="card" onClick={() => setModaIIsOpen4(true)}>
                                          <img src={CardImage4} className="cardImage" alt="" />
                                   </div>
                            </div>
                     </div>
                     <div className="ViewAllBtn">
                            <Link to="/" className="viewAll">View All</Link>
                     </div>

                     {/* ///////////////////////////////////////////////////////////// */}
                     <div>
                            <Modal isOpen={modaIIsOpen1} onRequestClose={() => setModaIIsOpen1(false)}>
                                   <img src={CardImage1} style={{ height: '100%', display: "flex", margin: '0 auto' }} alt="" />
                            </Modal>
                            <Modal isOpen={modaIIsOpen2} onRequestClose={() => setModaIIsOpen2(false)}>
                                   <img src={CardImage2} style={{ height: '100%', display: "flex", margin: '0 auto' }} alt="" />
                            </Modal>

                            <Modal isOpen={modaIIsOpen3} onRequestClose={() => setModaIIsOpen3(false)}>
                                   <img src={CardImage3} style={{ height: '100%', display: "flex", margin: '0 auto' }} alt="" />
                            </Modal>
                            <Modal isOpen={modaIIsOpen4} onRequestClose={() => setModaIIsOpen4(false)}>
                                   <img src={CardImage4} style={{ height: '100%', display: "flex", margin: '0 auto' }} alt="" />
                            </Modal>
                     </div>
              </>
       )
}
