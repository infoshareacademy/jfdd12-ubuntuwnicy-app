import React, { useState } from 'react'
import './QuizGenWrapperStyles.css'

import QuizTitleInput from './QuizTitleInput';
import AnswersList from './AnswersList'
import QuestionInput from './QuestionInput'
import AddAnswerButton from './AddAnswerButton'
import AddQuestionButton from './AddQuestionButton'
import { DeleteQuestionButton } from './DeleteQuestionButton';




let answersArr1 = [
    { id: 1, answer: 'aaa', isCorrect: false, isHighlighted: false },
    { id: 2, answer: 'bbb', isCorrect: true, isHighlighted: false },
    { id: 3, answer: 'ccc', isCorrect: false, isHighlighted: false },

]

export function QuizGenWrapper(props) {
    const questionsMap = {
        "1": {
            id: 1,
            question: 'tresc pytania',
            answers: [
                {
                    id: 'A', answer: 'AAA', isCorrect: false,
                },
                {
                    id: 'B', answer: 'BBB', isCorrect: false
                },
                {
                    id: 'C', answer: 'adsasdsCCC', isCorrect: false
                },
            ],
        }
    };

    const [questions, setQuestions] = useState(questionsMap);

    function onQuestionChange(e) {
        const questionId = +e.target.name;
        setQuestions({
            ...questions, 
            [questionId]: {
                ...questions[questionId],
                question: e.target.value,
            }
        });
           // addQuestion()
        
    }

    function addQuestion() {
        const newQuestion = {
            id: questions.length + 1,
            question: '',
            answers: [
                {
                    id: 'A', answer: '', isCorrect: false,
                },
                {
                    id: 'B', answer: '', isCorrect: false
                },
                {
                    id: 'C', answer: '', isCorrect: false
                },
            ],
            correctAnswerId: 'A',
        }

        setQuestions({
            ...questions,
            newQuestion,
        });
    }

    
    return (
        <div className='quizGenWrapper'>
            <h1 className='quizGenHeader'>STWÓRZ QUIZ</h1>
            <QuizTitleInput />
            {
                Object.values(questions).map(question => 
                <div key={question.id} className={"quizGenInputs"}>
                    <QuestionInput question={question} onQuestionChange={onQuestionChange}/>
                    <AnswersList question={question}/>
                    <div className="quizButtons">
                        <AddAnswerButton />
                        <AddQuestionButton onClick={addQuestion} />
                        <DeleteQuestionButton />
                    </div>
                </div>    
                )
            }
        </div>
    )
}

export default QuizGenWrapper