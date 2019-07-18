import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core'

export default function AnswerInput(props) {

    const { answer, isCorrect, answerId}= props

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
                checked={isCorrect}
                
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
