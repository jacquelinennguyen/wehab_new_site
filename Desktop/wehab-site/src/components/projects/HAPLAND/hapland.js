import React, {Component,useState} from "react";
// import '../../../about/about.css';

import Paper from '@material-ui/core/Card';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import HaplandImg from './hapland.png';


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


const Hapland = () => {

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

                    <Button className="project-button-hapland" variant="contained" color="primary" onClick={handleOpen} >HapLand</Button>
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
            <h2 id="transition-modal-title">HapLand</h2>
            <p id="transition-modal-description">In this project, we have designed and implemented HapLand, a scalable, robust biofeedback haptic system testbed to facilitate research-based haptics-enabled wearables design for the purpose of emotion regulation. HapLand was our initial attempt to build a vibro-tactile system testbed to study emotion and emotion regulation.</p>
            <div className="learn-more" >
              <a href="https://wehab.stanford.edu/hapland/" target="_blank" >Learn More</a>
              </div>
          </div>
        </Fade>
      </Modal>


              </span>
                    {/* <h5 className="content-head" >HapLand: A scalable robust emotion regulation haptic system testbed</h5> */}
                    <div className="project-image-container">
                        <img src={HaplandImg} className="project-image" />
                    </div>
                </div>
                </div>
        )
    }

export default Hapland;