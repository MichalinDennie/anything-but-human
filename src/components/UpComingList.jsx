import React, { useState } from 'react'
import '../Styles/UpcomingList.css'
import CardImage1 from "../Images/card1.jpg";
import CardImage2 from "../Images/card2.jpg";
import CardImage3 from "../Images/card3.jpg";
import CardImage4 from "../Images/card4.jpg";
import ModalImage from "./Modal";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


export default function UpComingShows() {
       const [modalState, setModalState] = useState(false)
       const useStyles = makeStyles((theme) => ({
              modal: {
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
              },
              paper: {
                     backgroundColor: theme.palette.background.paper,
                     boxShadow: theme.shadows[5],
                     padding: theme.spacing(2, 4, 3),
              },
       }));
       const classes = useStyles();
       const [open, setOpen] = React.useState(false);

       const handleOpen = () => {
              setOpen(true);
       };

       const handleClose = () => {
              setOpen(false);
       };

       const modalHandler = () => {
              setModalState(prev => !prev);
       }

       return (
              <>
                     <div className="upcominglist" >
                            <div className="upComingHeading">
                                   <h1 className="upComingHeadingText">UPCOMING SHOWS</h1>
                            </div>
                            <div className="listcontainer">
                                   <div className="card" onClick={handleOpen}>
                                          <img src={CardImage1} className="cardImage" alt="" />
                                   </div>
                                   <ModalImage modalState={modalState} setModalState={setModalState} />
                                   <div className="card" onClick={modalHandler}>
                                          <img src={CardImage2} className="cardImage" alt="" />
                                   </div>
                                   <div className="card" onClick={handleOpen}>
                                          <img src={CardImage3} className="cardImage" alt="" />
                                   </div>
                                   <div className="card" onClick={handleOpen}>
                                          <img src={CardImage4} className="cardImage" alt="" />
                                   </div>
                            </div>

                     </div>

                     {/* ///////////////////////////////////////////////////////////// */}
                     <div>
                            <Modal
                                   aria-labelledby="transition-modal-title"
                                   aria-describedby="transition-modal-description"
                                   className={classes.modal}
                                   open={open}
                                   onClose={handleClose}
                                   closeAfterTransition
                                   BackdropComponent={Backdrop}
                                   BackdropProps={{
                                          timeout: 400,
                                   }}
                            >
                                   <Fade in={open}>
                                          <div className={classes.paper}>
                                                 <img src={CardImage1} alt="" className="modalImage" />
                                          </div>
                                   </Fade>
                            </Modal>
                     </div>
              </>
       )
}
