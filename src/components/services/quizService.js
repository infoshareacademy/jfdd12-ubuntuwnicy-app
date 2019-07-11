const uid = localStorage.getItem('uid');

export function FetchQuiz() {
    return fetch(`https://ubuntuwnicy-app.firebaseio.com/ubuntuwnicy-app.json`)

        .then(res => res.json())
        .then(json => {
            return Object.values(json || {})
                .filter(todo => todo);
        })
}

export function SaveQuiz(quiz) {

    // return Object.assign({}, quiz, { [quiz]: quiz })

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