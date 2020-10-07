import React, {Component,useState} from "react";
// import '../../../about/about.css';

import Paper from '@material-ui/core/Card';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import PIVImg from './PIV.png';

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


const PIV = () => {

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

                    <Button className="project-button" variant="contained" color="primary" onClick={handleOpen} >PIV</Button>
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
            <h2 id="transition-modal-title">PIV</h2>
            <p id="transition-modal-description">We describe the design and evaluation of PIV, a personalizable and inconspicuous vibrotactile breathing pacer. Given the prevalence and adverse impact of anxiety and anxiety disorders, our goal is to develop technology that helps people regulate their anxiety through paced breathing. We examined two previously unstudied questions: what is an effective vibrotactile pattern for paced breathing, and where should the tactors be placed on the body to make the pacer most effective? We designed a series of personalized vibrotactile pacing patterns, and evaluated them on three body sites, in terms of self-reported and psychophysiological measures including skin conductance (SC) and breath wave parameters. The results show that personalization plays an important role in PIV’s pattern and placement design choices and we concluded that the choice of frequency based, strong-exhale-phased patterns and abdomen placement are appropriate for future studies. Should you be interested to replicate the study or use our dataset, please find our repository here.</p>
            <div className="learn-more" >
              <a href="https://wehab.stanford.edu/liph/" target="_blank" >Learn More</a>
              </div>
          </div>
        </Fade>
      </Modal>


              </span>
                    {/* <h5 className="content-head" >PIV: Personalizable Inconspicuous Vibrotactile Breathing Pacer</h5> */}
                    <div className="project-image-container">
                        <img src={PIVImg} className="project-image" />
                    </div>
                </div>
                </div>
        )
    }

export default PIV;