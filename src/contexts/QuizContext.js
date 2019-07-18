import React from 'react'
import quizes from '../data/quizes.json'

export const QuizContext = React.createContext(quizes)

export const QuizProvider = QuizContext.Provider
export const QuizConsumer = QuizContext.Consumer