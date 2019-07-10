import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

export default function AnswerInput(props) {

    const { answer, isCorrect, answerId } = props

    function onChange(e) {
        props.onAnswerChange(e.target.value, answerId)
    }

    return (
        <div className="answerInputsStyles">|{answer}|
            <p className='answerID'>{props.answerId}</p>
            <TextField
                className="answerInput"
                value={answer}
                placeholder='Wprowadź odpowiedź'
                onChange={onChange}
                label="Odpowiedź"
                multiline
                variant="outlined"
            />
            <Checkbox 
                className='isAnswerCorrect'
                type='checkbox' 
                checked={isCorrect} 
                color="default"
                //value="checkedA"
                inputProps={{
                    'aria-label': 'checkbox with default color',
           }}
            />
        </div>
    )
}
