import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // Btn za EDIT

  if(isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
    // Btn za SAVEE
  }

  return (
    <li>
      <span id="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => handleEdit()}>{!isEditing ? 'Edit' : 'Save'}</button>
    </li>
  );
}
