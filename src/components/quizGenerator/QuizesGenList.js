import React from 'react'
import { QuizContext } from '../../contexts/QuizContext'
import { fetchQuiz, addNewQuiz, deleteQuiz } from '../../services/QuizService'
import { BrowserRouter as Route, Link, Redirect, withRouter } from "react-router-dom";
import { Dimmer, Loader, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './QuizGenList.css'


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
            {listIsLoading ?
      <Dimmer active>
        <Loader size='massive'>Loading</Loader>
      </Dimmer>

     :
                <div className='listWrapper'>
                    <ul>
                        {this.state.quizes.map(quiz => {
                            return <li className='listQuiz' key={quiz.uniqueId}>Tytuł Quizu: {quiz.title}, liczba pytan: {quiz.questions.length}
                            <div className='buttonsWrap'>
                               <Button.Group> <Button positive to={`/quizes-gen-list/${quiz.uniqueId}`}>
                                    EDYTUJ
                                </Button> <Button.Or /><Button onClick={() => this.handleRemoveQuiz(quiz.uniqueId)}>USUŃ</Button></Button.Group>
                                </div>
                            </li>
                        })}
                    </ul>
                    <Button onClick={() => this.addNewQuizAndFollow(this.state.quizes.length + 1)}>Dodaj nowy quiz</Button>
                </div>
            } </div>
    }
}

export default withRouter(QuizesGenList)
