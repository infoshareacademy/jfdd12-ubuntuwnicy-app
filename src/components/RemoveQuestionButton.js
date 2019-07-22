import React from 'react'
import { getThemeProps } from '@material-ui/styles';

const RemoveQuestionButton = (props) => 
(
  <div>
    <button className='removeQuestionButton' onClick={props.onClick}>X</button>
  </div>
)

export default RemoveQuestionButton