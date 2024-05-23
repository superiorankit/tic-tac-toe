import React, { useContext } from 'react'
import "./box.css"
import { tictactoeContext } from '../../context/tictactoeContext';

const Box = ({ text, index }) => {

  const { updateValue, turn } = useContext(tictactoeContext);


  return (
    <div className='boxMain' onClick={() => updateValue(index, turn)}>
      {text}
    </div>
  )
}

export default Box
