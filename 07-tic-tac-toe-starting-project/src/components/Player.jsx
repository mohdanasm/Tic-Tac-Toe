import { useState } from "react";
export default function Player({ initialName, symbol,isActive,onNameChange }) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)
    function handleClick() {
        setIsEditing((editing) => !editing)
    }
    function handleChange(event) {
        setPlayerName(event.target.value)
         if(isEditing)
    {
         onNameChange(symbol,playerName)
    }
    }
   
    let content = (<span className="player">
        <span className="player-name">{playerName}</span>
        <span className="player-symbol">{symbol}</span>
    </span>)
    let buttonCaption = "Edit"
    if (isEditing) {
        content = (<span className="player"><input type="text" required value={playerName} onChange={handleChange}></input><span className="player-symbol">{symbol}</span>
        </span>)
        buttonCaption = "Save"
    }
    return (
        <li className={isActive?"active":undefined}>
            {content}
            <button onClick={handleClick}>{buttonCaption}</button>
        </li>


    );
}