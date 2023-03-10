import React,{useState,useEffect} from 'react'
import EachBox from './EachBox';
import Boxes from './Boxes.js';
import Xarrow from 'react-xarrows';
import SnakesAndLadders from './SnakesAndLadders';
import '../Styles.css'

export default function Layout(props) {


  const [val,setVal] = useState(1);
  const [turn,setTurn] = useState(0);
  const [player1Position,setPlayer1Position] = useState({
    currPos: 1,
    nsteps: -2,
    buttonVisibility : 1
  });
  const [player2Position,setPlayer2Position] = useState({
    currPos: 1,
    nsteps: -2,
    buttonVisibility : 1
  });

 // .............................................................  
  
  const {snakes,ladders,present} = SnakesAndLadders;
  const players = [props.player1Name,'Browser'];


  // ................ check for snakes and ladders  .......................

  

//  .............. useeffect for player 1 ......................

  useEffect(()=>{

    if(player1Position.nsteps>0){

      setTimeout(() => {
        setPlayer1Position({
          ...player1Position,
          currPos : player1Position.currPos + 1,
          nsteps : player1Position.nsteps - 1
        })
      }, 500);

    }
    else if(player1Position.nsteps == 0){

      setPlayer1Position({
        ...player1Position,
        currPos : present[player1Position.currPos],
        buttonVisibility : 1,
        nsteps : player1Position.nsteps-1
      })

    }
    else if(player1Position.nsteps == -1) RollDice2();
  },[player1Position])


// ............ useEffect For Player 2 .................................

  useEffect(()=>{

    if(player2Position.nsteps>0){

      setTimeout(() => {
        setPlayer2Position({
          ...player2Position,
          currPos : player2Position.currPos + 1,
          nsteps : player2Position.nsteps - 1
        })
      }, 500);

    }
    else if(player2Position.nsteps == 0){

      setPlayer2Position({
        ...player2Position,
        currPos : present[player2Position.currPos],
        buttonVisibility : 1,
        nsteps : player2Position.nsteps-1
      })
      
    }
    else if(player2Position.nsteps == -1) setTurn(0);
  },[player2Position])


//   ................ dice rolling function .......................

  function RollDice2(){
    setTurn(1);
    const rand = Math.floor(Math.random() * (6)) + 1;
      setVal(rand);
      if(rand+player2Position.currPos>=100) {
        alert(`${players[1]} won the game`);
        props.reset();
      }
      setPlayer2Position({
        ...player2Position,
        nsteps: rand,
        buttonVisibility : 0
      })
  }

  function RollDice1(){
    const rand = Math.floor(Math.random() * (6)) + 1;
      setVal(rand);
      if(rand+player1Position.currPos>=100) {
        alert(`${players[1]} won the game`);
        props.reset();
      }
      setPlayer1Position({
        ...player1Position,
        nsteps: rand,
        buttonVisibility : 0
      })
  }

  //  ..................... return statement .......................

  return (
    <div className='laayout'>
        <div className='left'> 
       
            <img src={require( `../resources/dice-${val}.png`)} className="image" alt="abc" />
            
            {!turn ? (player1Position.buttonVisibility ? (<button className='btn' onClick={RollDice1}>Roll Dice</button>)
            : (<button className='btn'>.....</button>)
             )
            : (player2Position.buttonVisibility ? (<button className='btn' >....</button>)
            : <button className='btn'>.....</button>
             )
            }
          
            <p className='comp' >This is {players[turn]}'s turn</p>
            <div className='comp'>
              <h2 className='comp'>Players</h2>
              <p className='comp'>player 1 - {players[0]}</p>
              <p className='comp'>player 2 - {players[1]}</p>
            </div>
        
        </div>
        <div className='right'>
           <div className='board'>
          
              {Boxes.map(box=>{
                return(
                  <div className='row'>
                    {
                      box.map(val=>{
                        return(
                          <EachBox key={val+1} val={val} player1Position={player1Position.currPos} player2Position={player2Position.currPos}/>
                        )
                      })
                    }
                  </div>
                )
              })}
         
              <div>
              {
                snakes.map(snake=>{
                  return(
                    <Xarrow start={`box${snake[0]}`} end={`box${snake[1]}`} color='black' path='smooth'/>
                  )
                })
              }
              {
                ladders.map(ladder=>{
                  return(
                    <Xarrow start={`box${ladder[0]}`} end={`box${ladder[1]}`} color='red' curveness={0} />
                  )
                })
              }
              </div>
          
           </div>
        </div>
    </div>
  )
}
