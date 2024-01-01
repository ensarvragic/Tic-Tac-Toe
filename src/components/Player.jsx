import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing((editing) => !editing);
    onChangeName(symbol, playerName);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // Btn za EDIT

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // Btn za SAVEE
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span id="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>
        {!isEditing ? "Edit" : "Save"}
      </button>
    </li>
  );
}
