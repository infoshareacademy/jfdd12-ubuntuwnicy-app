import React from 'react'


export default function AddAnswerButton(props) {
    const { onClick } = props;
    
    return (
        <button className='addQuestionButton' onClick={onClick}>Dodaj Odpowiedź</button>
    )
}


