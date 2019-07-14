import React, {useState} from 'react';



export default function AddQuestionButton(props) {
    const { onClick } = props;
 
    return (
        <button className={'addQuestionButton'} onClick={onClick}> Dodaj Pytanie </button>
    )
 }