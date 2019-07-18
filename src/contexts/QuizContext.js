import React, { useState } from 'react'
import initialQuizes from '../data/quizes.json'

export const QuizContext = React.createContext()

export const QuizProvider = function (props) {
    const [quizes, setQuizes] = useState(initialQuizes.quizes)

    const addQuiz = newQuiz => {
        setQuizes([...quizes, newQuiz])
    }

    const selectQuiz = (quizId) => {
        return quizes.find(quiz => quiz.id === quizId)
    }

    const updateQuiz = (updatedQuiz) => {
        const newQuizes = quizes.map(quiz => {
            if (quiz.id === updateQuiz.id) {
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
        updateQuiz
    }} {...props} />
}

export const QuizConsumer = QuizContext.Consumer