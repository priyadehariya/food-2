import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { Button, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
  width:'100%',
    marginTop:'2rem'
    },
  
}));

export default function Save(props) {

    const classes = useStyles();
    const {home,id,name,description,change,isUpdate,save} = props;
    return (
        <div className={classes.root}>
        <TextField className={classes.root}
        label="User id"
        disabled={isUpdate}
        placeholder="User id"
        name="id"
        value={id}
        onChange={change}
        
      />
       <TextField className={classes.root}
        label="Username"
        placeholder="Username"
        name="name"
        value={name}
        onChange={change}

      />
       <TextField className={classes.root}
        label="About"
        placeholder="About"
        name="description"
        value={description}
        onChange={change}

        rows={3}
      />
      <Typography className={classes.root}>
      <Button onClick={props.save} style={{marginRight:'1rem'}} variant="contained" color ="primary">Save</Button>
      <Button onClick={home} variant="contained" color ="secondary">Go To Home</Button>
      </Typography>
      </div>
    )
}
