import React from 'react'
import TextField from '@material-ui/core/TextField';



function QuestionInput(props) {
    return (
        <div className='questionAndDeleteButtonInput'>
            <p className='questionID'>{props.questionID}</p>
            <TextField
                id="outlined-multiline-static"
                label="PYTANIE"
                multiline
                rows="4"
                defaultValue="Treść Pytania"
                className="questionInput"
                margin="normal"
                variant="outlined"
            />
              <button className='deleteQuestion'> X </button>
        </div>
    )
}

export default QuestionInput