import React, {Component,useState} from "react";
// import '../../../about/about.css';

import Paper from '@material-ui/core/Card';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import WehabImg from './wehab.png';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: '400'
  },
}));


const Wehab = () => {

    const classes = useStyles();
   
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

        return(
                      
                <div className="project-content">
                <div  className="project-container" >
                <span className="hover-span">

                    <Button className="project-button-wehab" variant="contained" color="primary" onClick={handleOpen} >WEHAB</Button>
                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      className={classes.modal}
                      open={open}
                      onClose={handleClose}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                      BackdropProps={{
                      timeout: 500,
                     }}
                      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">WEHAB</h2>
            <p id="transition-modal-description">Emotion regulation in the wild (ER-in-the-wild) is an important grand challenge problem of increasing focus and is hard to approach effectively with point solutions. We provide HCI researchers and designers thinking about ER in-the-wild with an ER-in-the-wild system architecture derived from mHealth, the Emotion Regulation Process Model(PM), and a circular biofeedback model that can be used when designing an ER system. Our work is based on literature reviews of and collaborations with experts from the domains of wearables, emotion regulation, haptics and biofeedback (WEHAB) as well as systems. In addition to providing a generic model for ER-in-the-Wild, the system architecture presented in this paper explains different kinds of emotion regulatory interventions and their characteristics.</p>
            <div className="learn-more" >
              <a href="https://wehab.stanford.edu/wehab/" target="_blank" >Learn More</a>
              </div>
          </div>
        </Fade>
      </Modal>


              </span>
                    {/* <h5 className="content-head" >Emotion Regulation in the Wild: Introducing WEHAB System Architecture</h5> */}
                    <div className="project-image-container">
                        <img src={WehabImg} className="project-image" />
                    </div>
                </div>
                </div>
        )
    }

export default Wehab;