import React from 'react'
import TextField from '@material-ui/core/TextField';



function QuestionInput(props) {


    return (
        <div className='questionAndDeleteButtonInput'>
            <p className='questionID'>{props.question.id}</p>
            <TextField
                id="outlined-multiline-static"
                label="PYTANIE"
                name={props.question.id.toString()}
                multiline
                rows="4"
                defaultValue={props.question.question}
                onChange={props.onQuestionChange}
                className="questionInput"
                margin="normal"
                variant="outlined"
            />
              
        </div>
    )
}

export default QuestionInput