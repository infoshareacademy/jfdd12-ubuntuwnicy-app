import * as firebase from 'firebase'

export function FetchQuiz() {
    return fetch(`https://ubuntuwnicy-app.firebaseio.com/ubuntuwnicy-app.json`)

        .then(res => res.json())
        .then(json => {
            return Object.values(json || {})

        })
}

export function SaveQuiz(quiz) {

    // return Object.assign({}, quiz, { [quiz]: quiz })

    fetch(`https://ubuntuwnicy-app.firebaseio.com/ubuntuwnicy-app/.json`, {
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
        .then(quiz => quiz)


}


// var db = firebase.database();
// var ref = db.ref("server/saving-data/fireblog/posts");

// // Attach an asynchronous callback to read the data at our posts reference
// ref.on("value", function (snapshot) {
//     console.log(snapshot.val());
// }, function (errorObject) {
//     console.log("The read failed: " + errorObject.code);
// });