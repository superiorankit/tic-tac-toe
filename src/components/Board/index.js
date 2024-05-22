import React, { useState } from 'react'
import Box from '../Box';
import "./board.css"
import Button from '../Button';
import Message from '../Meesage';

const Board = () => {

    const [arr, setArr] = useState(Array(9).fill(""));
    const [winner, setWinner] = useState(null);
    const [turn, setTurn] = useState("X");


    const checkWin = () => {

        const combos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let arrComb of combos) {
            const [ind1, ind2, ind3] = arrComb;
            console.log(ind1, ind2, ind3)
            if (arr[ind1] && arr[ind1] === arr[ind2] && arr[ind1] === arr[ind3]) {
                return turn;
            }

        }


        return null;

    }

    const checkDraw = () => {
        for (let box of arr) {
            if (!box) return false;
        }

        return true;
    }


    const updateValue = (index, turn) => {

        arr[index] = turn;
        setArr([...arr]);


        if (checkWin()) {
            setWinner(turn);
        }
        else if (checkDraw()) {
            alert("draw")
            setWinner("draw")
        }
        else {
            setTurn(turn === "X" ? "O" : "X");
        }

    }

    const reset = () => {
        setArr(Array(9).fill(""));
        setWinner(null);
        setTurn("X");
    }

    return (
        <div className='boardMain'>
            <h1>Tic Tac Toe</h1>
            {winner ? <><Message text={winner==="draw"?`Math Draw`:`Winner ${winner}`}/> <Button text="Start New Match" handle={reset}/></> :
            <><div className='board'>
                {arr.map((text, index) => {
                    return <Box key={index} index={index} text={text} turn={turn} updateValue={updateValue} />
                })}</div>
                <div className='turnTxt'>Turn: {turn === "X" ? <span>Player 1 (X)</span> : <span>Player 2 (O)</span>}</div>
                <Button text="Reset" handle={reset}/>
                </>
                }

        </div>
    )
}

export default Board
