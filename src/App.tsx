import { useState } from "react";
import "./App.css";
import { HangImage } from "./components/HangImage";
import { letters } from "./helpers/letters";

function App() {
  const [attemps, setAttemps] = useState(0);

  const checkLetter = (letter: string) => {
    console.log(letter);
    setAttemps(Math.min(attemps + 1, 9))
  };

  return (
    <div className="App">
      {/*imagenes*/}
      <HangImage imageNumber={attemps} />
      {/*palabra oculta*/}
      <h3>----------</h3>
      {/*contador de intentos*/}
      <h3>Intentos: {attemps}</h3>
      {/*letras*/}
      {letters.map((letter) => (
        <button key={letter} onClick={() => checkLetter(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
}

export default App;
