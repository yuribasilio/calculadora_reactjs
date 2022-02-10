import React, { useState } from "react";
import { Container } from "@mui/material";
import "./Calculators.css";
import { Box } from "@mui/system";

export default function Calculators() {
  const [num, setNum] = useState(0);
  const [old, setOld] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e) {
    var results = e.target.value;
    if (num === 0) {
      setNum(results);
    } else {
      setNum(num + results);
    }
  }

  function clear() {
    setNum(0);
  }

  function percent() {
    setNum(num / 100);
  }

  function sign() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function operatorHandler(e) {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setOld(num);
    setNum(0);
  }

  function calculate() {
    if (operator === "/") {
      setNum(old / num);
    }else if(operator === "x"){
        setNum(old * num);
    }else if(operator === "+"){
        setNum(parseFloat(old) + parseFloat(num));
    }else if(operator === "-"){
        setNum(old - num);        
    }
  }

  return (
    <>
      <Box m={5}>
        <Container maxWidth="xs">
          <div className="wrapper">
            <h1 className="result">{num}</h1>
            <button className="silver" onClick={clear}>
              AC
            </button>
            <button className="silver" onClick={sign}>
              +/-
            </button>
            <button className="silver" onClick={percent}>
              %
            </button>
            <button
              className="orange"
              onClick={operatorHandler}
              value="/"
            >
              /
            </button>
            <button
              className="gray"
              onClick={inputNum}
              value="7"
            >
              7
            </button>
            <button
              className="gray"
              onClick={inputNum}
              value="8"
            >
              8
            </button>
            <button
              className="gray"
              onClick={inputNum}
              value="9"
            >
              9
            </button>
            <button
              className="orange"
              onClick={operatorHandler}
              value="x"
            >
              x
            </button>
            <button
              className="gray"
              onClick={inputNum}
              value="4"
            >
              4
            </button>
            <button
              className="gray"
              onClick={inputNum}
              value="5"
            >
              5
            </button>
            <button
              className="gray"
              onClick={inputNum}
              value="6"
            >
              6
            </button>
            <button
              className="orange"
              onClick={operatorHandler}
              value="-"
            >
              -
            </button>
            <button
              className="gray"
              onClick={inputNum}
              value="1"
            >
              1
            </button>
            <button
              className="gray"
              onClick={inputNum}
              value="2"
            >
              2
            </button>
            <button
              className="gray"
              onClick={inputNum}
              value="3"
            >
              3
            </button>
            <button
              className="orange"
              onClick={operatorHandler}
              value="+"
            >
              +
            </button>
            <button
              className="gray zero"
              onClick={inputNum}
              value="0"
            >
              0
            </button>
            <button
              className="silver"
              onClick={inputNum}
              value={","}
            >
              ,
            </button>
            <button className="orange" onClick={calculate}>
              =
            </button>
          </div>
        </Container>
      </Box>
    </>
  );
}
