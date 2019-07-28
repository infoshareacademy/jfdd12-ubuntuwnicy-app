import firebase from 'firebase'


export const signUp = signUpForm => {

  const uniqueIdRef = firebase.database().ref('users').push(signUpForm)

  const postId = uniqueIdRef.key

  firebase.database().ref(`users/${postId}`).update({ 'uniqueId': `${postId}` })

};

export const signOut = () => {
  firebase.auth().signOut();
};

export const signIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password);
};
