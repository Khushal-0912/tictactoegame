import React, { useState } from 'react'
import Boxes from './Boxes'

const Game = () => {
  const [number, setNumber] = useState([...Array(9).fill(null)])
  const [cond, setCond] = useState(true)

  const gameWinner = () => {
    let winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < winner.length; i++) {
      let [a, b, c] = winner[i];
      if (number[a] != null && number[a] === number[b] && number[a] === number[c]) {
        return number[a]
      }
    }
    return false
  }

  let result = gameWinner();

  const handleClick = (index) => {
    if(number[index] != null){
      return ;
    }
    let newArr = [...number]
    newArr[index] = cond ? "X" : "O"
    setNumber(newArr)
    setCond(!cond)

  }

  const play = () =>{
   setNumber([...Array(9).fill(null)]) 
  }

  return (
    <>
      <div className='container'>
        <h1>Tic Tac Toe</h1>
        <h1>{cond ? "X" : "O"}:Let's Your Turn</h1>
        {
          result ?<div><h2>{result} : your winner</h2><button onClick={play}>Play Again</button></div> : (
            <>
              <div className="row">
                <Boxes onClick={() => handleClick(0)} value={number[0]}></Boxes>
                <Boxes onClick={() => handleClick(1)} value={number[1]}></Boxes>
                <Boxes onClick={() => handleClick(2)} value={number[2]}></Boxes>

              </div>
              <div className="row">
                <Boxes onClick={() => handleClick(3)} value={number[3]}></Boxes>
                <Boxes onClick={() => handleClick(4)} value={number[4]}></Boxes>
                <Boxes onClick={() => handleClick(5)} value={number[5]}></Boxes>
              </div>
              <div className="row">
                <Boxes onClick={() => handleClick(6)} value={number[6]}></Boxes>
                <Boxes onClick={() => handleClick(7)} value={number[7]}></Boxes>
                <Boxes onClick={() => handleClick(8)} value={number[8]}></Boxes>
              </div>

            </>
          )
        }

      </div>
    </>
  )
}

export default Game