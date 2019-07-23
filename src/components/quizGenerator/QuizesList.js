import React from 'react'
import { QuizContext } from '../../contexts/QuizContext'
import { Button } from '@material-ui/core'
import { fetchQuiz, addNewQuiz } from '../../services/QuizService'

export class QuizesGenList extends React.Component {

    static contextType = QuizContext

    state = {
        quizes: [],
        listIsLoading: false
    }

    componentDidMount() {
        this.setState({ listIsLoading: true })
        const quizesRef = fetchQuiz(quizes => {

            this.setState({ quizes, listIsLoading: false })
        })

        return () => { quizesRef.off('value') }
    }

    render() {
        console.log(this.state)

        const { listIsLoading } = this.state

        return <div>
            {listIsLoading ? <p>loader</p> :
                <div>
                    <ul>
                        {this.state.quizes.map(quiz => {
                            return <li>Quiz nr. {quiz.id}, tytul Quizu: {quiz.title}, liczba pytan: {quiz.questions.length}<Button>Edytuj Quiz</Button></li>
                        })}
                    </ul>
                    <Button onClick={() => addNewQuiz(this.state.quizes.length)}>Dodaj nowy quiz</Button>
                </div>
            } </div>
    }
}