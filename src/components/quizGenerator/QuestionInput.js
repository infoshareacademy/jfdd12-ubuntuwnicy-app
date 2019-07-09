import React from 'react'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
//import DeleteIcon from '@material-ui/icons/Delete';

function QuestionInput(props) {
    return (
        <div>
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
             <IconButton 
                className="deleteQuestion" 
                aria-label="Delete">
                
            </IconButton>
        </div>
    )
}

export default QuestionInput