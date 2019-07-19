
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

