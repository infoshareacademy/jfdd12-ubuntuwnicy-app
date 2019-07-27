import React from 'react'
import { QuizContext } from '../../contexts/QuizContext'
import { Button } from '@material-ui/core'
import { fetchQuiz, addNewQuiz, deleteQuiz } from '../../services/QuizService'
import { BrowserRouter as Route, Link, Redirect, withRouter } from "react-router-dom";

export class QuizesGenList extends React.Component {

    static contextType = QuizContext

    state = {
        quizes: [],
        listIsLoading: false
    }

    componentDidMount() {
        this.setState({ listIsLoading: true })
        const quizesRef = fetchQuiz(quizes => {

            this.context.setQuizes(quizes)

            this.setState({ quizes, listIsLoading: false })
        })

        return () => { quizesRef.off('value') }
    }

    addNewQuizAndFollow(quizId) {
        const newUniqueId = addNewQuiz(quizId)
        this.props.history.push(`/quizes-gen-list/${newUniqueId}`)
    }

    handleRemoveQuiz(uniqueId) {
        deleteQuiz(uniqueId)
    }

    render() {
        console.log(this.state)
        console.log(this.context)

        const { listIsLoading } = this.state

        return <div>
            {listIsLoading ? <p>loader</p> :
                <div>
                    <ul>
                        {this.state.quizes.map(quiz => {
                            return <li key={quiz.uniqueId}>Tytuł Quizu: {quiz.title}, liczba pytan: {quiz.questions.length}
                                <Link to={`/quizes-gen-list/${quiz.uniqueId}`}>
                                    Edytuj Quiz
                                </Link><Button onClick={() => this.handleRemoveQuiz(quiz.uniqueId)}>Usuń Quiz</Button>
                            </li>
                        })}
                    </ul>
                    <Button onClick={() => this.addNewQuizAndFollow(this.state.quizes.length + 1)}>Dodaj nowy quiz</Button>
                </div>
            } </div>
    }
}

export default withRouter(QuizesGenList)
