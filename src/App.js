import { useState } from "react";
import "./styles.css";

export default function App() {
  const redcol = "red";
  const [bg, changebg] = useState(redcol);
  const [text, change] = useState("-clickMe-");

  const chnage = () => {
    changebg("black");
    change("+clickMe+");
  };
  const rev = () => {
    changebg("red");
    change("-clickMe-");
  };

  return (
    <div className="App" style={{ backgroundColor: bg }}>
      <button onClick={chnage} onDoubleClick={rev}>
        {text}
      </button>
    </div>
  );
}
