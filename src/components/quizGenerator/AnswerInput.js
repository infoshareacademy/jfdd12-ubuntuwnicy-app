import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

function AnswerInput(props) {
    return (
        <div className="answerInputsStyles">
            <p className='answerID'>{props.answerID}</p>
            <TextField
                label="Odpowiedź"
                placeholder="Treść Odpowiedzi"
                multiline
                className='answerInput'
                variant="outlined"
      />
            <Checkbox
                className="isAnswerCorrect"
                color="default"
                value="checkedA"
                inputProps={{
                 'aria-label': 'checkbox with default color',
        }}
      />
        </div>
    )
}

export default AnswerInput