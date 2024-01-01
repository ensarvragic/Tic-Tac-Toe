import React, { useState, useRef, useEffect } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null); 

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    onChangeName(symbol, playerName);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSave();
    }
  };

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  let editablePlayerName = (
    <span className="player-name" onClick={handleEdit}>
      {playerName}
    </span>
  );

  if (isEditing) {
    editablePlayerName = (
      <input
        ref={inputRef}
        type="text"
        value={playerName}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleSave}
        required
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span id="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={isEditing ? handleSave : handleEdit}>
        {!isEditing ? "Edit" : "Save"}
      </button>
    </li>
  );
}
