import firebase from 'firebase'

export const fetchQuiz = (callback) => {

    const quizRef = firebase.database().ref("quizes")

    quizRef.on("value", snapshot => {
        const value = snapshot.val()

        const entries = Object.values(value);

        callback(entries)
    })
    return quizRef
}

export const addNewQuiz = (quizId) => {

    const newQuestionCard =
    {
        "id": `${quizId}`,
        "title": "Nowy Quiz",
        "uniqueId": '',
        "questions": [
            {
                "id": "1",
                "question": "Pytanie",
                "answers": [
                    {
                        "id": "1",
                        "answer": "",
                        "correct": true
                    },
                    {
                        "id": "2",
                        "answer": "",
                        "correct": false
                    },
                    {
                        "id": "3",
                        "answer": "",
                        "correct": false
                    },
                    {
                        "id": "4",
                        "answer": "",
                        "correct": false
                    }
                ],
                "correctAnswers": [1]

            }]
    }

    const uniqueIdRef = firebase.database().ref('quizes').push(newQuestionCard)

    const postId = uniqueIdRef.key

    firebase.database().ref(`quizes/${postId}`).update({ 'uniqueId': `${postId}` })

    return postId
}

export const saveQuiz = (quiz) => {

    // const questionsWithCorrectAnswers = quiz.questions.map(question => {
    //     const correctAnswers = question.answers.filter(answer => {
    //         return answer.isCorrect === true
    //     })

    //     return question = ({ ...question, correctAnswers: correctAnswers }

    // })
    // console.log(quizWithCorrectAnswers)
    // firebase.database().ref(`quizes/${quiz.uniqueId}`).set(quizWithCorrectAnswers)
    return null
}

export const deleteQuiz = (uniqueQuizId) => {
    firebase.database().ref(`quizes/${uniqueQuizId}`).remove()
}

