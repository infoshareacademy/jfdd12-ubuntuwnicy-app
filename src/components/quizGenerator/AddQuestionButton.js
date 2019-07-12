import React, {useState} from 'react'
import AnswersList from './AnswersList';
import QuestionInput from './QuestionInput';
import AddAnswerButton from './AddAnswerButton';
import { DeleteQuestionButton } from './DeleteQuestionButton';
//import uuid from "uuid/v4";

//const questionArr = [
//    {id: uuid(), question: 'pytanie numer 1'},
//    {id: uuid(), question: 'pytanie numer 2'},
//    {id: uuid(), question: 'pytanie numer 3'},
//    {id: uuid(), question: 'pytanie numer 4'}
//]

export default function AddQuestionButton(props) {
//    const [question, setQuestion] = useState('');
//
//    function onQuestionChange(e) {
//        setQuestion(e.target.value);
//    }
//
//    function onQuestionClicked() {
//        props.addQuestion(question)
//    }
    return (
//        <>
//        <div className={"quizGenInputs"} onChange={onQuestionChange}>
//                <QuestionInput questionID='1' />
//                <AnswersList  />
//                <div className="quizButtons">
//                    <AddAnswerButton />
//                    <AddQuestionButton />
//                    <DeleteQuestionButton />
//                </div>
//        </div>
        <button className={'addQuestionButton'} onClick={addQuestionButtons} > Dodaj Pytanie </button>
//        </>
    )
}
