import * as firebase from 'firebase'

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

export function setTodoCompleted(todoId, isCompleted) {
    fetch(`https://ubuntuwnicy-app.firebaseio.com/ubuntuwnicy-app.json`, {
        method: "PATCH",
        body: JSON.stringify({ isCompleted }),
    })
}

export function GetQuiz() {
  return fetch(`https://ubuntuwnicy-app.firebaseio.com/ubuntuwnicy-app.json`)
        .then(res => {
            return res.json()
        })

}
