import { useEffect, useState } from "react";
import "./App.css";
import GridTextBox from "./components/mUI/GridTextBox";
import { Words } from "./data/5LetterWords";

function App() {
  const FiveLetterWords = Words;
  const [RNG, setRNG] = useState("");
  const [victory, setVictory] = useState(false);

  const randomWord = () => {
    let random =
      FiveLetterWords[Math.floor(Math.random() * FiveLetterWords.length)];
    return random;
  };

  useEffect(() => {
    if (RNG === "") {
      setRNG(randomWord());
    }
    if (victory) {
      setRNG(randomWord());
      setVictory(false);
    }
  });

  const gridsToRender = Array.from(Array(5));

  console.log(RNG)

  return (
    <div className="App">
      {RNG !== "" && (
        <header className="App-header">
          {gridsToRender.map((grid, index) => {
            return (
              <GridTextBox
                key={index}
                RNGword={RNG.word}
                setVictory={setVictory}
              />
            );
          })}
        </header>
      )}
    </div>
  );
}

export default App;
