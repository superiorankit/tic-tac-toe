import React from 'react'
import TicTacToe from './TicTacToe'
import { TicTacToeProvider } from '../context/tictactoeContext'

const Index = () => {
  return (
    <div>
      <TicTacToeProvider>
        <TicTacToe />
      </TicTacToeProvider>
    </div>
  )
}

export default Index
