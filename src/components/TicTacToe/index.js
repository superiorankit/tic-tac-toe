import React, { useContext, useState } from 'react'
import Board from '../Board';
import Message from '../Meesage';
import Button from '../Button';
import "./tictactoe.css"
import { tictactoeContext } from '../../context/tictactoeContext';

const TicTacToe = () => {

    const { winner, reset } = useContext(tictactoeContext);


    return (
        <div className='main'>
            <h1>Tic Tac Toe</h1>
            {winner ?
                <>
                    <Message text={winner === "draw" ? `Math Draw` : `Winner ${winner === "X" ? 'Player 1 (X)' : 'Player 2 (O)'}`} />
                    <Button text="Start New Match" handle={reset} />
                </> :
                <>
                    <Board />
                </>
            }

        </div>
    )
}

export default TicTacToe
