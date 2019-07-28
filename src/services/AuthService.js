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

  const usersRef = firebase.database().ref('users')

  usersRef.once("value").then(snapshot => {
   const snapshotVal = snapshot.val()
   const entries = Object.values(snapshotVal);
   
   entries.filter(user => {
    if (user.email === email && user.password === password) { 
      // setState({ isLoggedIn: true })
      console.log('zalogowany')
      return true}})
    
  })

};
