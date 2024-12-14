import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import {Accordion,AccordionSummary,AccordionDetails, Button, Typography }from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      marginTop:'2rem'
    },
    spaceTop:{
        marginTop:'1rem'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));


export default function Card(props) {

    const classes = useStyles();
    const{name,description,delet,edit} = props;
    return (
        <div className={classes.root}>
      <Accordion className={classes.spaceTop}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           {description}
          </Typography>
        </AccordionDetails>
        
          <Typography align='right' className={classes.spaceTop}>
            <Button onClick={edit} color='primary'>Edit</Button>
             <Button onClick={delet}  color='secondary'>Delete</Button>

          </Typography>
       

      </Accordion>
      </div>
    )
}
