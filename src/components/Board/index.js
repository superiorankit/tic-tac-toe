import React, { useState } from 'react'
import Box from '../Box';
import "./board.css"
import Button from '../Button';

const Board = ({arr,turn,updateValue,reset}) => {

    return (
        <div className='boardMain'>

            <div className='board'>
                {arr.map((text, index) => {
                    return <Box key={index} index={index} text={text} turn={turn} updateValue={updateValue} />
                })}
            </div>

            <div className='turnTxt'>
                Turn: {turn === "X" ? <span>Player 1 (X)</span> : <span>Player 2 (O)</span>}
            </div>

            <Button text="Reset" handle={reset} />
        </div>
    )
}

export default Board
