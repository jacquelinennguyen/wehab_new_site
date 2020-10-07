import React from "react";
import '../../people/people.css';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import Fade from '@material-ui/core/Fade';
import Dialog from '@material-ui/core/Dialog';

const useStyles = makeStyles((theme) => ({

  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: '400',
    overflowY: Infinity
  },
  propImage: {
    width: "100%",
    height: "auto"
  }
}));


const PersonTile = (props) => {

     const classes = useStyles();

    const [open,  setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = (value) => {
      setOpen(false);
    };
  
        return(
                <div  className="people-container" >                  
                    <span className="hover-span">

                    <Button className="person-button" variant="contained" color="primary" onClick={handleClickOpen}>{props.name}</Button>

                    <Dialog 
                      onClose={handleClose} 
                      aria-labelledby="simple-dialog-title" 
                      open={open}
                    >
                      <Fade in={open}>
                            <div className={classes.paper}>
                                <img src={props.personImage} className={classes.propImage}/>                                
                                <h2 id="transition-modal-title">{props.name}</h2>
                                <p>
                                  {props.education}
                                </p>                                
                                <p id="transition-modal-description">{props.description}</p>                       
                            </div>
                        </Fade>
                    </Dialog>

                    </span>                    
                    <div className="people-image-container">
                        <img src={props.personImage} className="people-image" />
                    </div>
                </div>              
        )
    }

export default PersonTile;