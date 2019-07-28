import React from 'react';
import './Home.css';
import AnswersList from './components/quizGenerator/AnswersList'
import { } from '@material-ui/core/'
import SignUp from '../src/components/Auth/SignUp'
import SignIn from '../src/components/Auth/SignIn'


export default function Home(props) {
const {onLogin} = props

  function onLoginFromHome(uniqueId) {
    console.log('on login from home')
    onLogin(uniqueId)
  }

  return <div className={'titlePage'}>
    <div className='welcomeTitle'>
      <h1>sQuizYou</h1>
      <h2>Witamy!</h2>
      <div className="infoOnMainPage">
        <p>Przejdź do zakładki <b>STWÓRZ QUIZ</b>, aby dodać nowy quiz</p>
        <p>lub</p>
        <p>Przejdź do zakładki <b>DOŁĄCZ DO QUIZU</b>, aby rozwiązać już istniejący quiz</p>
      </div>
    </div>
    <div>
      <SignIn onLogin={onLoginFromHome} isLoggedIn={props.isLoggedIn}></SignIn>
      <SignUp onLogin={props.onLogin} isLoggedIn={props.isLoggedIn}></SignUp>
    </div>
  </div>
};