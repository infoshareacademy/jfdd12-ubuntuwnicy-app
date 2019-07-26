import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));


export default function AnswerInput(props) {
    const classes = useStyles();

   const { answer, isCorrect, answerId, onCheckboxChange, name, onAnswerChange, onClickRemoveAnswer } = props
   return (
       <div className="answerInputsStyles">
           <TextField
               className="answerInput"
               value={answer}
               placeholder='Wprowadź odpowiedź'
               onChange={onAnswerChange}
               label="Odpowiedź"
               multiline
               variant="outlined"
               answerid={answerId}
               name={answerId}
           ></TextField>
           <Checkbox
               className="isAnswerCorrect"
               color="default"
               iscorrect={'isCorrect'}
               onClick={onCheckboxChange}
               answerid={answerId}
               inputProps={{
                   'aria-label': 'checkbox with default color',
               }}
               checked={isCorrect}
               name={name}
           />
           <IconButton className={classes.button} aria-label="delete" name={answerId} onClick={onClickRemoveAnswer} >
               <DeleteIcon />
           </IconButton>
       </div>
   )
}


