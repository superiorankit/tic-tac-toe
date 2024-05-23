import React, { useContext, useState } from 'react'
import Box from '../Box';
import "./board.css"
import Button from '../Button';
import { tictactoeContext } from '../../context/tictactoeContext';

const Board = () => {

    const {turn,reset,arr} = useContext(tictactoeContext);

    return (
        <div className='boardMain'>

            <div className='board'>
                {arr.map((text, index) => {
                    return <Box key={index} index={index} text={text} />
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
