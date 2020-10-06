import React, {Component,useState} from "react";
import '../../../about/about.css';


import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FARImg from './FAR2.png';


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

const Far = () => {

    const classes = useStyles();
   
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

        return(                            
                <div  className="project-container" >
                    <span className="hover-span">

                        <Button className="project-button" variant="contained" color="primary" onClick={handleOpen} >FAR</Button>
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
                                <h2 id="transition-modal-title">FAR</h2>
                                <p id="transition-modal-description">We aim to address the problem of affect dysregulation in youth diagnosed with autism spectrum disorder (ASD).  Affect dysregulation 
                                refers to a failure to successfully manage one’s affect (emotions, moods, or stress responses) in a context-appropriate way. Affect dysregulation is
                                a known challenge for many people and among neurodiverse populations, individuals diagnosed with Autism Spectrum Disorder (ASD) show greater affect dysregulation than the general population. Youth with
                                ASD are especially at risk because affect dysregulation can have a major negative 
                                impact on their development. They have a harder time utilizing cognitive-based approaches, and are instead more likely to resort to maladaptive strategies such as suppression, visual avoidance, repetitive behavior, and aggression.​ In addition, available clinical treatments which target reduction in
                                irritation and aggression, despite their benefits, impose significant health-related limitations for these youth..</p>
                                <div className="learn-more" >
                                <a href="https://wehab.stanford.edu/far/" target="_blank" >Learn More</a>
                                </div>
                            </div>
                            </Fade>
                        </Modal>

                    </span>
                    <div className="project-image-container">
                        <img src={FARImg} className="project-image" />
                    </div>
                </div>              
        )
    }

export default Far;