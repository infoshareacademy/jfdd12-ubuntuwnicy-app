import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core'

export default function AnswerInput(props) {

    const { answer, isCorrect, answerId } = props

    function onChange(e) {
        props.onAnswerChange(e.target.value, answerId)
    }

    function onCheckboxChange(e) {

        props.onCheckboxChange(e.currentTarget.checked, answerId)

    }

    function onAnswerDelete() {
        props.onAnswerDelete(answerId)
    }

    return (
        <div className="answerInputsStyles">
            <p className='answerID'>{props.answerIdToShow}</p>
            <TextField
                className="answerInput"
                value={answer}
                placeholder='Wprowadź odpowiedź'
                onChange={onChange}
                label="Odpowiedź"
                multiline
                variant="outlined"
            ></TextField>

            <Checkbox
                className="isAnswerCorrect"
                color="default"
                checked={isCorrect}
                onChange={onCheckboxChange}

                inputProps={{
                    'aria-label': 'checkbox with default color',
                }}

            />

            <Button
                className="deleteAnswerButton"
                onClick={onAnswerDelete}
            >x</Button>

        </div>
    )
}
