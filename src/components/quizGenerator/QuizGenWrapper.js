import React, {useState} from 'react'
import './QuizGenWrapperStyles.css'

import QuizTitleInput from './QuizTitleInput';
import AnswersList from './AnswersList'
import QuestionInput from './QuestionInput'
import AddAnswerButton from './AddAnswerButton'
import AddQuestionButton from './AddQuestionButton'
import { DeleteQuestionButton } from './DeleteQuestionButton';




function QuizGenWrapper(props) {
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
        },
        "2": {
            id: 2,
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
            correctAnswerId: 'A',
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

        addQuestionButtons();
    }

    function addQuestionButtons() {
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
                        <AddQuestionButton />
                        <DeleteQuestionButton />
                    </div>
                </div>    
                )
            }
        </div>
    )
}

export default QuizGenWrapper