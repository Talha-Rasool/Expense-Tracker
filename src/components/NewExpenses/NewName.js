import { useState, useRef } from "react";
import './NewName.css';

export default function NewName() {
  const player = useRef();

  const [enteredPlayer, setEnteredPlayer] = useState("");

  function ChangeClick() {
    setEnteredPlayer(player.current.value);
    player.current.value = "";
  }

  return (
    <section id="player">
      <h2 >Welcome {enteredPlayer} to Expense Tracker</h2>
      <p >
        <input id="player input"  ref={player} type="text" />
        <button onClick={ChangeClick}>Enter Name</button>
      </p>
    </section>
  );
};
