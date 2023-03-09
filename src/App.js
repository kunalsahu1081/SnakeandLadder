import React, {useState} from "react";
import Starters from "./components/Starters";
import Layout from "./components/Layout";

const App = () => {

  const [Starting, setStarting] = useState(true);
  const [startLayout, setStartLayout] = useState(false)
  const [player1Name, setPlayer1Name] = useState('player 1')
  const [player2Name, setPlayer2Name] = useState('player 2')

  function startApp(name){
    setStarting(false);
    setStartLayout(true);
  }

  function reset(){
    setStarting(true);
    setStartLayout(false);
  }

  function updatePlayer1Name(e){
    setPlayer1Name(e.target.value);
  }

  function updatePlayer2Name(e){
    setPlayer2Name(e.target.value);
  }

  

  return (
    <div className="App">
      {Starting && (<Starters startApp={startApp} updatePlayer1Name={updatePlayer1Name} updatePlayer2Name={updatePlayer2Name} />)}
      {startLayout && (<Layout player1Name={player1Name} player2Name={player2Name}  reset={reset}/>)} 
    </div>
  );
};

export default App;