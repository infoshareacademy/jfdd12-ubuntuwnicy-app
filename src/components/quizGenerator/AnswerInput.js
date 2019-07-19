import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core'

export default function AnswerInput(props) {

    const { answer, isCorrect, answerId, onCheckboxChange } = props

    return (
        <div className="answerInputsStyles">
            <TextField
                className="answerInput"
                value={answer}
                placeholder='Wprowadź odpowiedź'

                label="Odpowiedź"
                multiline
                variant="outlined"
                answerId={answerId}
            ></TextField>

            <Checkbox
                className="isAnswerCorrect"
                color="default"
                isCorrect={isCorrect}
                onClick={onCheckboxChange}
                answerId={answerId}
                inputProps={{
                    'aria-label': 'checkbox with default color',
                }}
                checked={isCorrect}

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
