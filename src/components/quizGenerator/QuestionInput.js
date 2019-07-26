import React from 'react'
import TextField from '@material-ui/core/TextField';



function QuestionInput(props) {


    return (
        <div className='questionAndDeleteButtonInput'>
            {/* <p className='questionID'>{questions.lenght}</p> */}
            <TextField
                id="outlined-multiline-static"
                label="Pytanie"
                placeholder="Wprowadź pytanie"
                name={props.question.id}
                multiline
                rows="4"
                value={props.question.question}
                onChange={event => props.onChange(props.question.id, event.target.value)}
                className="questionInput"
                margin="normal"
                variant="outlined"
            />

        </div>
    )
}

export default QuestionInput