import firebase from 'firebase'

export const fetchQuiz = (callback) => {

    const quizRef = firebase.database().ref("quizes")

    quizRef.on("value", snapshot => {
        const value = snapshot.val()

        const entries = Object.values(value);
        debugger
        callback(entries)
    })
    return quizRef
}





export const addNewQuiz = (quizId) => {

    const newQuestionCard =
    {
        "id": {quizId},
        "title": "Pierwszy",
        "questions": [
            {
                "id": "1",
                "question": "questsdsaddasion",
                "answers": [
                    {
                        "id": "1",
                        "answer": "ans11wer",
                        "correct": true
                    },
                    {
                        "id": "2",
                        "answer": "ansssssdew12er",
                        "correct": true
                    },
                    {
                        "id": "3",
                        "answer": "mariar",
                        "correct": true
                    },
                    {
                        "id": "4",
                        "answer": "blondie",
                        "correct": true
                    }
                ],
                "correctAnswers": [1, 2]

            }]
    }

    firebase.database().ref('quizes').push(newQuestionCard)

}



// export const saveQuiz = (quizId) => {

//     firebase.database().ref('quizes').then(value.find(quiz => quiz.id === quizId))

//TODO ^^^^^^^^^^^^^^^^^^^^

// }














export function FetchQuiz() {
    return fetch(`https://ubuntuwnicy-app.firebaseio.com/ubuntuwnicy-app.json`)

        .then(res => res.json())
        .then(json => {
            return Object.values(json || {})

        })
}

export function SaveQuiz(quiz) {

    fetch(`https://ubuntuwnicy-app.firebaseio.com/ubuntuwnicy-app.json`, {
        method: "PUT",
        body: JSON.stringify(quiz),
    })
}

export function SaveAQuestion(quiz, questionId) {

    fetch(`https://ubuntuwnicy-app.firebaseio.com/ubuntuwnicy-app/${questionId}/question.json`, {
        method: "PUT",
        body: JSON.stringify(quiz),
    })
}

export function saveQuestions(questions, questionId) {

    fetch(`https://ubuntuwnicy-app.firebaseio.com/ubuntuwnicy-app/${questionId}/answers.json`, {
        method: "PUT",
        body: JSON.stringify(questions),
    })
}

export function saveCheckbox(answerId, questionId) {
    fetch(`https://ubuntuwnicy-app.firebaseio.com/ubuntuwnicy-app/${questionId}/correctAnswer.json`, {
        method: "PUT",
        body: JSON.stringify(answerId),
    })
}


export function GetQuiz() {
    return fetch(`https://ubuntuwnicy-app.firebaseio.com/ubuntuwnicy-app.json`)
        .then(res => {
            return res.json()
        })

}

