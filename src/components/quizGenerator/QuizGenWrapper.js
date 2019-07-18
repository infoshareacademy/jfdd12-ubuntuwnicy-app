import React from 'react'
import './QuizGenWrapperStyles.css'
import AnswersList from './AnswersList'
import QuestionInput from './QuestionInput'
import { QuizContext } from '../../contexts/QuizContext';
import QuizTitleInput from './QuizTitleInput';
import AddAnswerButton from './AddAnswerButton';
import AddQuestionButton from './AddQuestionButton';
import RemoveQuestionButton from '../RemoveQuestionButton'

export default class QuizGenWrapper extends React.Component {

    static contextType = QuizContext

    render() {
        let context = this.context
        let questionsIndexZero = context.quizes.quizes[0].questions

        return <div className='quizGenWrapper'>
            <h1 className='quizGenHeader'>STWÓRZ QUIZ</h1>
            <QuizTitleInput />
            
            {
                questionsIndexZero.map((question, index) =>
                    <div key={index} className={"quizGenInputs"}>
                        <RemoveQuestionButton />
                        <QuestionInput question={question}
                            questionId={index} />
                        <AnswersList question={question} questionId={index} />
                        <AddAnswerButton />
                        <AddQuestionButton />
                    </div>
                )
            }
            <button>Zapisz Quiz</button>
        </div>
    }
}


