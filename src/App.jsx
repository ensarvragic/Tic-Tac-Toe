import "./App.css";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from './components/Log'

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [activePlayer, setActivePlayer] = useState('X')

  function handleSelectSquare (rowIndex, colIndex) {
    setActivePlayer((curActive) =>  curActive === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      let currentPlayer = 'X'

      if(prevTurns > 0 && prevTurns[0].player === 'X'){
        currentPlayer = 'O'
      }

      const updatedTurns = [{square: {row: rowIndex, col: colIndex}, player: activePlayer},...prevTurns]
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName='Ensar' symbol='X' isActive={activePlayer === 'X'}/>
          <Player initialName='Fahret' symbol='O'isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      <Log/>
    </main>
  );
}

export default App;
