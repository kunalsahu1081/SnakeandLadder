import React from 'react'
import SnakesAndLadders from './SnakesAndLadders'
import '../Styles.css'

export default function EachBox({val,player1Position,player2Position}) {

  const {snakes,ladders} = SnakesAndLadders;

  let style = {
    backgroundColor : 'rgb(77, 134, 168)',
    fontWeight: 'bold'
  }

  if(val%2==0){
    style = {
      backgroundColor : 'white',
      fontWeight: 'bold'
    }
  }
  if(val==100){
    style = {
      backgroundColor : 'rgb(234, 187, 34)',
      fontWeight: 'bold'
    }
  }


  return (
    <div className='box' id={`box${val}`}  style={style} >{val}
      <div className='players'>
        {player1Position==val && (<div className='icon1'></div>)}
        {player2Position==val && (<div className='icon2'></div>)}
      </div>
    </div>
  )
}
