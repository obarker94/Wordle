import { Grid } from "@mui/material";
import * as React from "react";
import CustomTextBox from "./CustomTextBox";
import BasicModal from "../Modal";

export default function GridTextBox({ RNGword, setVictory }) {
  const [focus, setFocus] = React.useState(0);
  const test = ["", "", "", "", ""];
  const [word, setLetter] = React.useState(["", "", "", "", ""]);
  const [winner, setWinner] = React.useState(false);
  const [reset, setReset] = React.useState(false);

  const targetWord = RNGword;
  const arrayTargetWord = Array.from(targetWord);

  React.useEffect(() => {
    if (
      JSON.stringify(arrayTargetWord) === JSON.stringify(word) &&
      reset === false
    ) {
      setLetter(["", "", "", "", ""]);
      setWinner(true);
      setVictory(true);
      setReset(false);
    }
    if (
      (reset === true && winner === false) ||
      (reset === true && winner === true)
    ) {
      setReset(false);
      setWinner(false);
    }
  }, [word, arrayTargetWord, reset, winner]);

  return (
    <>
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="center"
        marginBottom={5}
      >
        {test.map((entryField, index) => {
          return (
            <Grid item xs={1} key={index * 10}>
              <CustomTextBox
                key={index}
                index={index}
                setFocus={setFocus}
                focus={focus}
                setLetter={setLetter}
                word={word}
                targetWord={targetWord}
                reset={reset}
              />
            </Grid>
          );
        })}
        <BasicModal openStatus={winner} setReset={setReset} />
      </Grid>
    </>
  );
}
