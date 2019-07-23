import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const RemoveQuestionButton = (props) => {
  const classes = useStyles();
return (
  <div className='removeQuestionButton'>
    <Button variant="contained" color="secondary" className={classes.button} onClick={props.onClick}>USUŃ PYTANIE</Button>
  </div>
)}

export default RemoveQuestionButton

