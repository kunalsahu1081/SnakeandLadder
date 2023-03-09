import React,{useState} from 'react'
import '../Styles.css'

export default function Starters({startApp,updatePlayer1Name,updatePlayer2Name}) {

   const [Name,setName] = useState('Player 1')

   function handleChange(e){
     setName(e.target.value);
   }

  return (

    <div className='start'>

        <p className='comp'>
          Snakes and ladders is an ancient Indian board game that’s regarded today as a worldwide classic. 
          It requires two or more players and takes place on a board with numbered, gridded squares. 
          Throughout the board, there are snakes and ladders which connect different squares. 
          Players roll a die and navigate the board. Landing on a ladder advances a player to a square further up the board, while landing on a snake 
          means they have to go back to a previous square.
        </p>

        <p className='comp'>
          The aim of the game is to reach the final square. The game is a race that’s based on sheer luck.
          Number of players allowed in this version of game is <strong style={{backgroundColor:'white'}}>2</strong>
        </p>

          <label htmlFor='Player Name' className='comp'>Enter Player 1 Name</label>
          <input type='text' className='comp' placeholder='Player 1' id='Player 1' onChange={updatePlayer1Name} ></input>

          <label htmlFor='Player Name' className='comp'>Enter Player  2 Name</label>
          <input type='text' className='comp' placeholder='Player 2' id='Player 1' onChange={updatePlayer2Name} ></input>


        <button className='btn' onClick={startApp} >Start Game</button>
    </div>

  )
}
