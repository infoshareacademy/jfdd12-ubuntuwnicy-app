import React, { useState } from 'react'
import initialQuizes from '../data/quizes.json'
import { fetchQuiz } from '../services/QuizService'

export const QuizContext = React.createContext()

export const QuizProvider = function (props) {
    const [quizes, setQuizes] = useState(initialQuizes.quizes)

    const fetchQuizToContext = () => {
        fetchQuiz().then(quiz => setQuizes(quiz))
    }

    const addQuiz = newQuiz => {
        setQuizes([...quizes, newQuiz])
    }

    const selectQuiz = (quizId) => {
        return quizes.find(quiz => quiz.id === quizId)
    }

    const updateQuiz = (updatedQuiz) => {
        const newQuizes = quizes.map(quiz => {
            if (quiz.id === updatedQuiz.id) {
                return updatedQuiz
            } else {
                return quiz
            }
        })

        setQuizes(newQuizes)
    }

    return <QuizContext.Provider value={{
        quizes,
        selectQuiz,
        addQuiz,
        updateQuiz,
        fetchQuizToContext
    }} {...props} />
}

export const QuizConsumer = QuizContext.Consumer