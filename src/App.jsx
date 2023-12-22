import "./App.css";
import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name='Ensar' symbol='1'/>
          <Player name='Fahret' symbol='2'/>
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
