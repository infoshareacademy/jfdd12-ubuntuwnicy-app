import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

export default function AnswerInput(props) {

    const { answer, isCorrect, answerId } = props

    function onChange(e) {
        props.onAnswerChange(e.target.value, answerId)
    }

    function onCheckboxChange(e) {

        props.onCheckboxChange(e.currentTarget.checked, answerId)

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
          <label>
                <Checkbox
                    className="isAnswerCorrect"
                    color="default"
                    checked={isCorrect}
                    onChange={onCheckboxChange}

                    inputProps={{
                        'aria-label': 'checkbox with default color',
                    }}

                />
            </label>
        </div>
    )
}
