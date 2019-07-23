import React from 'react'
import { getThemeProps } from '@material-ui/styles';

const RemoveQuestionButton = (props) => 
(
  <div>
    <button className='removeButton' onClick={props.onClick}>X</button>
  </div>
)

export default RemoveQuestionButton