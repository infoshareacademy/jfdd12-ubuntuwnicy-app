import React, { useState } from 'react';
import './Home.css';
import { getUserByUniqueId } from './services/AuthService'
import { } from '@material-ui/core/'
import SignUp from '../src/components/Auth/SignUp'
import SignIn from '../src/components/Auth/SignIn'
import logo from './components/Navbar/logo.png'
import { Container } from "semantic-ui-react";


export default function Home(props) {
  const { onLogin, userName, isLoggedIn } = props



  function onLoginFromHome(uniqueId) {

    onLogin(uniqueId)
  }


  return <Container>
    <div className={'titlePage'}>
      <div className='welcomeTitle'>
        <img src={logo} />
        {isLoggedIn ? <><h2>Witaj {userName}!</h2>
          <div className="infoOnMainPage">
            <p>Przejdź do zakładki <b>NOWY QUIZ</b>, aby dodać nowy quiz</p>
            <p>lub</p>
            <p>Przejdź do zakładki <b>TWOJE QUIZY</b>, aby rozwiązać już istniejący quiz</p>
          </div></> : <>
            <div className="infoOnMainPage">
              <p><b>ZALOGUJ</b> lub <b>ZAREJESTRUJ SIĘ</b>, aby korzystać z serwisu.</p>
            

            <div>
              <SignIn onLogin={onLoginFromHome} isLoggedIn={props.isLoggedIn}></SignIn>
              <h3>lub</h3>
              <SignUp onLogin={onLoginFromHome} isLoggedIn={props.isLoggedIn}></SignUp>
            </div></div></>}
      </div>
    </div>
  </Container>
};

