import { useEffect, useState } from "react";
import "./App.css";
import { HangImage } from "./components/HangImage";
import { letters } from "./helpers/letters";
import { getRandomWord } from "./helpers/getRandomWord";

function App() {

  const [word, setWord] = useState(getRandomWord());
  const [hiddenWord, setHiddenWord] = useState('- '.repeat(word.length)); 
  const [attemps, setAttemps] = useState(0);
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);

  useEffect(()=>{
    if(attemps >=9 ){
      setLose(true);
    }
  }, [attemps])

  useEffect(()=>{
    const currentHiddenWord = hiddenWord.split(' ').join('');
    if(currentHiddenWord === word){
      setWon(true)
    }
  },[hiddenWord])

  const newGame = () =>{
    const newWord = getRandomWord()
    setWord(newWord)
    setHiddenWord('- '.repeat(newWord.length))
    setAttemps(0)
    setLose(false)
    setWon(false)
  }

  const checkLetter = (letter: string) => {
    if(lose) return;
    if(won) return;

    if(!word.includes(letter)){
      setAttemps(Math.min(attemps + 1, 9))
      return;
    }

    const hiddenWordArray = hiddenWord.split(' ')

    for(let i = 0; i<word.length; i++){
      if(word[i] === letter){
        hiddenWordArray[i] = letter;
      }
    }

    setHiddenWord(hiddenWordArray.join(' '))

  };

  return (
    <div className="App">
      {/*imagenes*/}
      <HangImage imageNumber={attemps} />
      {/*palabra oculta*/}
      <h3 className="hidden">{hiddenWord}</h3>
      {/*contador de intentos*/}
      <h3>Intentos: {attemps}</h3>
      {/*el jugador perdió*/ }
      {
        (lose)? <h2>Perdió, la palabra correcta era {word}</h2>
        :''
      }
      {/*el jugador ganó*/ }
      {
        (won)? <h2>Ganó, la palabra es {word}</h2>
        :''
      }
      {/*letras*/}
      {letters.map((letter) => (
        <button key={letter} onClick={() => checkLetter(letter)}>
          {letter}
        </button>
      ))}
      <br />
      <button onClick={newGame}>¿Nuevo juego?</button>
    </div>
  );
}

export default App;
