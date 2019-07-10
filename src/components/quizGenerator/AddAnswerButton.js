import React from 'react'
import AnswersList from './AnswersList'
import AnswerInput from './AnswerInput'
import QuestionInput from './QuestionInput';
import { answersArr } from './AnswersList'

export default function AddAnswerButton(props) {

    function addAnswerButtonHandler() {
        console.log(answersArr)
        answersArr = answersArr.concat({ answer: 'nowy', isCorrect: false })

    }

    return (
        <button className='addAnswerButton' onClick={addAnswerButtonHandler}>Dodaj Odpowiedź</button>
    )
}

// import React from 'react'
// import QuizTitleInput from './QuizTitleInput';
// import AnswersList from './AnswersList'
// import QuestionInput from './QuestionInput'


// export default function AddQuestionButton(props) {

//     const { questionID, answersCount } = props

//     function addQuestion() {

//         return <QuestionInput />

//     }

//     return (
//         <button className='addQuestionButton' onClick={addQuestion}>Dodaj Pytanie</button>
//     )
// }
