import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

export default function AnswerInput(props) {

    const { answer, isCorrect, answerid, onCheckboxChange, onAnswerChange } = props

    return (
        <div className="answerInputsStyles">
            <TextField
                name={answerid}
                className="answerInput"
                value={answer}
                placeholder='Wprowadź odpowiedź'
                onChange={onAnswerChange}
                label="Odpowiedź"
                multiline
                variant="outlined"


            ></TextField>

            <Checkbox
                className="isAnswerCorrect"
                color="default"
                iscorrect={'isCorrect'}
                onClick={onCheckboxChange}
                answerid={answerid}
                inputProps={{
                    'aria-label': 'checkbox with default color',
                }}
                checked={isCorrect}
                name={answerid}

            />

        </div>
    )
}
