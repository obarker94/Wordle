import { TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@mui/styles";

export default function CustomTextBox({
  index,
  setFocus,
  focus,
  setLetter,
  word,
  targetWord,
  reset,
}) {
  const useStyles = makeStyles({
    input: {
      color: "black",
      background: "white",
      textAlign: "center",
      fontWeight: "bolder",
      fontSize: "82px",
      fontFamily: "sans-serif",
    },
    wrongInput: {
      color: "black",
      background: "red",
      textAlign: "center",
      fontWeight: "bolder",
      fontSize: "82px",
      fontFamily: "sans-serif",
    },
    rightInput: {
      color: "black",
      background: "green",
      textAlign: "center",
      fontWeight: "bolder",
      fontSize: "82px",
      fontFamily: "sans-serif",
    },
    nearlyRightInput: {
      color: "black",
      background: "yellow",
      textAlign: "center",
      fontWeight: "bolder",
      fontSize: "82px",
      fontFamily: "sans-serif",
    },
  });
  const classes = useStyles();
  const valueRef = useRef(0);
  const [status, setStatus] = useState("input");

  const wordArray = Array.from(targetWord);

  const handleChange = () => {
    setFocus(index + 1);

    if (wordArray[index] === valueRef.current.value) {
      setStatus("rightInput");
    }

    if (wordArray[index] !== valueRef.current.value) {
      if (wordArray.includes(valueRef.current.value))
        setStatus("nearlyRightInput");

      if (!wordArray.includes(valueRef.current.value)) setStatus("wrongInput");
    }

    if (!valueRef.current.value) {
      setStatus("input");
    }

    let wordCopy = [...word];
    wordCopy[index] = valueRef.current.value;
    setLetter(wordCopy);

    if (!valueRef.current.value) {
      setFocus(index - 1);
    }
  };

  useEffect(() => {
    if (index === focus) {
      valueRef.current.focus();
    }
  }, [focus, index]);

  useEffect(() => {
    if (reset === true) {
      valueRef.current.value = null;
      setStatus("input");
      setFocus(0);
    }
  }, [reset]);

  return (
    <>
      <TextField
        variant="filled"
        inputProps={{ className: classes[status], maxLength: 1 }}
        onChange={() => handleChange()}
        inputRef={valueRef}
      />
    </>
  );
}
