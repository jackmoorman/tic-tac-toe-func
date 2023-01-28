import React from 'react'
import { useState, useEffect } from 'react';

let player = 'X';

const Board = () => {

  const initialBoard = {
    0: '-', 1: '-', 2: '-',
    3: '-', 4: '-', 5: '-',
    6: '-', 7: '-', 8: '-'
  }

  console.log('re-rendered');

  const [board, setBoard] = useState(initialBoard);
  // const [player, setPlayer] = useState('X')
  let boxes = [];

  for (let i = 0; i < 9; i++) {
    boxes.push(
      <button id={i} key={i}  className='box' onClick={(e) => {handleClick(e)}}>{board[i]}</button>
    );
  }
  const checkWin = () => {
    if (board[0] !== '-' && board[0] === board[1] && board[0] === board[2]) return alert(`${player} wins!`)
    else if (board[3] !== '-' && board[3] === board[4] && board[3] === board[5]) return alert(`${player} wins!`)
    else if (board[6] !== '-' && board[6] === board[7] && board[6] === board[8]) return alert(`${player} wins!`)
    else if (board[0] !== '-' && board[0] === board[3] && board[0] === board[6]) return alert(`${player} wins!`)
    else if (board[1] !== '-' && board[1] === board[4] && board[1] === board[7]) return alert(`${player} wins!`)
    else if (board[2] !== '-' && board[2] === board[5] && board[2] === board[8]) return alert(`${player} wins!`)
    else if (board[0] !== '-' && board[0] === board[4] && board[0] === board[8]) return alert(`${player} wins!`)
    else if (board[2] !== '-' && board[2] === board[4] && board[2] === board[6]) return alert(`${player} wins!`)
    // return alert(`${player} wins!`)
  }
  
  useEffect(()=> {
    checkWin()
    if (player === 'X') player = 'O';
    else {player = 'X'};
  });

  // [Object.values(board)]

  const handleClick=(e) => {
    const newBoard = {...board}
    newBoard[e.target.id] = player
    // if (player === 'X') setPlayer('O')
    // else {setPlayer('X')};
    
    setBoard(newBoard);
  }

  return (
    <div className='board-container'>
      {boxes}
    </div>
  )
}

export default Board;