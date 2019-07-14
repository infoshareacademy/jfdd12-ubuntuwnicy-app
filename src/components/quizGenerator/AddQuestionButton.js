import React, {useState} from 'react'


export default function AddQuestionButton(props) {

    return (
        <button className={'addQuestionButton'}  onClick={props.addQuestion}> Dodaj Pytanie </button>

    )
}
