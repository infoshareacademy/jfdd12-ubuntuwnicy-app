import React from 'react'

import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

function QuizTitleInput(props) {
    return (
        <>
            <TextField
                className="quizTitleInput"
                label="QUIZ"
                placeholder="Tytuł Quizu"
                variant="outlined"
                InputLabelProps={{
                shrink: true,
        }}
      />
            <Input
            className="quizTitleTimer"
            defaultValue="00:00"
      />
        </>
    )
}

export default QuizTitleInput