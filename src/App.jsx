import "./App.css";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState('X')

  function handleSelectSquare () {
    setActivePlayer((curActive) =>  curActive === 'X' ? 'O' : 'X');
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
      LOG
    </main>
  );
}

export default App;
