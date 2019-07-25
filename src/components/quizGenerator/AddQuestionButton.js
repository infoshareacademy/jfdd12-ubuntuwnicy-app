import React from 'react';




export default function AddQuestionButton(props) {
    

    const { onClick } = props;
 
    return (
        <button className='saveQuizButton' onClick={onClick}>DODAJ PYTANIE</button>
    )
 }

 