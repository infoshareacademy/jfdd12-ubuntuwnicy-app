import React from 'react'
import { QuizContext } from '../../contexts/QuizContext'
import { fetchQuiz, addNewQuiz, deleteQuiz } from '../../services/QuizService'
import { BrowserRouter as Route, Link, Redirect, withRouter } from "react-router-dom";
import { Dimmer, Loader, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './QuizGenList.css'
import './QuizGenWrapperStyles.css'
import ScrollUpButton from "react-scroll-up-button";



class QuizesGenList extends React.Component {


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

        const { listIsLoading } = this.state

        return <div>
            {listIsLoading ?
      <Dimmer active>
        <Loader size='massive'>Proszę czekać...</Loader>
      </Dimmer>

     :
                
                <div className='listWrapper'>
                    <ul>
                        {this.state.quizes.map(quiz => {
                            return <li className='listQuiz' key={quiz.uniqueId}>{quiz.title}, liczba pytań: {quiz.questions.length}
                                <div className='buttonsWrap'>
                                <Button.Group> 
                                        <Link to={`/quizes-gen-list/${quiz.uniqueId}`}>
                                        <Button positive>
                                            EDYTUJ
                                        </Button> 
                                        </Link>
                                        <Button.Or />
                                        <Button onClick={() => this.handleRemoveQuiz(quiz.uniqueId)}>
                                            USUŃ
                                        </Button>
                                    </Button.Group>
                                </div>
                            </li>
                        })}
                    </ul>
                    <button className='addQuizButton' onClick={() => this.addNewQuizAndFollow(this.state.quizes.length + 1)}>NOWY QUIZ</button>
                    <ScrollUpButton />
                </div>
             
            } </div>
    }
}

export default withRouter(QuizesGenList)
