import { useEffect, useState } from "react";
import "./App.css";
import ColourComponent from "./components/ColourComponent";

function App() {
  const [colours, setColours] = useState([]);
  const [rand, setRand] = useState("");
  const [gameMsg, setGameMsg] = useState("");
  const [counter, setCounter] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [winCount, setWinCount] = useState(0);
  const [loseCount, setLoseCount] = useState(0);

  useEffect(() => {
    setColours([makeColour(), makeColour(), makeColour(), makeColour()]);
  }, []);

  useEffect(() => {
    setRand(colours[Math.floor(Math.random() * 4)]);
  }, [colours]);

  const makeColour = () => {
    let randNum1 = Math.floor(Math.random() * 255);
    let randNum2 = Math.floor(Math.random() * 255);
    let randNum3 = Math.floor(Math.random() * 255);
    let colour = `${randNum1},${randNum2},${randNum3}`;
    return colour;
  };

  const newGame = () => {
    setIsEnd(false);
    setColours([makeColour(), makeColour(), makeColour(), makeColour()]);
    setCounter(0);
    setGameMsg("");
  };

  return (
    <div className="container">
      <p className="result">
        Winn {winCount} : Lose {loseCount}
      </p>
      <div className="colour-wrapper">
        {colours.map((el, i) => {
          return (
            <ColourComponent
              key={i}
              colour={el}
              rand={rand}
              setGameMsg={setGameMsg}
              counter={counter}
              setCounter={setCounter}
              setIsEnd={setIsEnd}
              setWinCount={setWinCount}
              setLoseCount={setLoseCount}
            />
          );
        })}
      </div>
      <p className="text-colour">rgb {rand}</p>
      <span className="game-msg">{gameMsg}</span>
      {isEnd ? (
        <button onClick={newGame} className="again">
          Play Again
        </button>
      ) : null}
    </div>
  );
}

export default App;
