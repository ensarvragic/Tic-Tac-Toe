import "./App.css";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name='Ensar' symbol='1'/>
          <Player name='Fahret' symbol='2'/>
        </ol>
        <GameBoard/>
      </div>
      LOG
    </main>
  );
}

export default App;
