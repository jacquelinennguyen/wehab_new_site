import React, {Component,useState} from "react";
import '../../../about/about.css';

import Paper from '@material-ui/core/Card';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import PIVplusImg from './PIVplus.jpg';


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


const PIVplus = () => {

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

                    <Button className="project-button" variant="contained" color="primary" onClick={handleOpen} >PIV++</Button>
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
            <h2 id="transition-modal-title">PIV++</h2>
            <p id="transition-modal-description">PIV++ is a project that focuses on measuring PIV efficacy while a user is performing a psychological tasks, in this case, a compound remote associates test developed by Jung-Beeman et al. We are interested to determine the effect of the PIV in the presence of a stressor. Please find the details of the study at https://osf.io/rbk2h/</p>
            <div className="learn-more" >
              <a href="https://wehab.stanford.edu/piv-2/" target="_blank" >Learn More</a>
              </div>
          </div>
        </Fade>
      </Modal>


              </span>
                    {/* <h5 className="content-head" >PIV++: Efficacy of a Vibrotactile Breathing Pacer in Presence of a Cognitive stressor</h5> */}
                    <div className="project-image-container">
                        <img src={PIVplusImg} className="project-image" />
                    </div>
                </div>
                </div>
        )
    }

export default PIVplus;