import { createContext, useState } from "react";

export const tictactoeContext = createContext();

export const TicTacToeProvider = ({children})=>{
    
    
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
        if (!arr[index]) {
            arr[index] = turn;
            setArr([...arr]);


            if (checkWin()) {
                setWinner(turn);
            }
            else if (checkDraw()) {
                setWinner("draw")
            }
            else {
                setTurn(turn === "X" ? "O" : "X");
            }
        }

    }

    const reset = () => {
        setArr(Array(9).fill(""));
        setWinner(null);
        setTurn("X");
    }

    return (
        <tictactoeContext.Provider value={{
            arr,winner,turn, checkWin, checkDraw, updateValue,reset
        }}>
            {children}
        </tictactoeContext.Provider>
    )
}