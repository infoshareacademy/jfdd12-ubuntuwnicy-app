import React from 'react';
import './Home.css';
import AnswersList from './components/quizGenerator/AnswersList'
import { } from '@material-ui/core/'
import SignUp from '../src/components/Auth/SignUp'
import SignIn from '../src/components/Auth/SignIn'


function Home() {
  return <div className={'titlePage'}>
    <h1>sQuizYou</h1>
    <h2>Witamy!</h2>
    <div className="infoOnMainPage">
      <p>Przejdź do zakładki <b>STWÓRZ QUIZ</b>, aby dodać nowy quiz</p>
      <p>lub</p>
      <p>Przejdź do zakładki <b>DOŁĄCZ DO QUIZU</b>, aby rozwiązać już istniejący quiz</p>
    </div>
    <SignIn></SignIn>
    <SignUp></SignUp>
  </div>
};



export default Home;