import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core'

export default function AnswerInput(props) {

    const { answer, isCorrect, answerId, onAnswerClickDelete, index } = props

    function onChange(e) {
        props.onAnswerChange(e.target.value, answerId)
    }

    function onCheckboxChange(e) {

        props.onCheckboxChange(e.currentTarget.checked, answerId)

    }

    return (
        <div className="answerInputsStyles">
            <TextField
                className="answerInput"
                value={answer}
                placeholder='Wprowadź odpowiedź'
                onChange={onChange}
                label="Odpowiedź"
                multiline
                variant="outlined"
                answerId={answerId}
            ></TextField>

            <Checkbox
                className="isAnswerCorrect"
                color="default"
                checked={isCorrect}
                onChange={onCheckboxChange}
                answerId={answerId}
                inputProps={{
                    'aria-label': 'checkbox with default color',
                }}

            />

            {/* <Button
                answerId={answerId}
                index={index}
                className="deleteAnswerButton"
                onClick={onAnswerClickDelete}
            >x</Button> */}

        </div>
    )
}
