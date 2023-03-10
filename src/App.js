import React, {useState} from "react";
import Starters from "./components/Starters";
import Layout from "./components/Layout";

const App = () => {

  const [Starting, setStarting] = useState(true);
  const [startLayout, setStartLayout] = useState(false)
  const [player1Name, setPlayer1Name] = useState('player 1')

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

  return (
    <div className="App">
      {Starting && (<Starters startApp={startApp} updatePlayer1Name={updatePlayer1Name} />)}
      {startLayout && (<Layout player1Name={player1Name} reset={reset}/>)} 
    </div>
  );
};

export default App;