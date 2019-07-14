import React from 'react'


export default function AddAnswerButton(props) {

    function addAnswerButtonHandler() {
        props.onAnswerAdd()
    }

    return (
        <button className='addAnswerButton' onClick={addAnswerButtonHandler}>Dodaj Odpowiedź</button>
    )
}



// export default function AddQuestionButton(props) {

//     const { questionID, answersCount } = props

//     function addQuestion() {

//         return <QuestionInput />

//     }

//     return (
//         <button className='addQuestionButton' onClick={addQuestion}>Dodaj Pytanie</button>
//     )
// }
