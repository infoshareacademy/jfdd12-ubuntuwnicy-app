import React from 'react';
import './App.css';
import AnswersList from './components/quizGenerator/AnswersList'


function App() {
  return <div className={'titlePage'}>
        <h1>sQuizYou</h1>
        <h2>Witamy!</h2>
        <div className="infoOnMainPage">
            <p>Przejdź do zakładki <b>STWÓRZ QUIZ</b>, aby dodać nowy quiz</p>
            <p>lub</p>
            <p>Przejdź do zakładki <b>DOŁĄCZ DO QUIZU</b>, aby rozwiązać już istniejący quiz</p>
      </div>
    </div>
};

export default App;