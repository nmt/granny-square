/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./GrannySquare.css";
import { colours } from "./utils/colours";

function GrannySquare() {
  const [input, setInput] = useState("");
  const [oneStyle, setOneStyle] = useState({ backgroundColor: "none" });
  const [twoStyle, setTwoStyle] = useState({ backgroundColor: "none" });
  const [threeStyle, setThreeStyle] = useState({ backgroundColor: "none" });
  const [fourStyle, setFourStyle] = useState({ backgroundColor: "none" });
  const [fiveStyle, setFiveStyle] = useState({ backgroundColor: "none" });

  const getColour = (input: number) => {
    return colours.get(input) || "";
  };

  const goTown = (input: string) => {
    const numbers = input.split(" ");
    switch (numbers.length) {
      case 1:
        setOneStyle({
          backgroundColor: getColour(Number.parseInt(numbers[0])),
        });
        break;
      case 2:
        setTwoStyle({
          backgroundColor: getColour(Number.parseInt(numbers[1])),
        });
        break;
      case 3:
        setThreeStyle({
          backgroundColor: getColour(Number.parseInt(numbers[2])),
        });
        break;
      case 4:
        setFourStyle({
          backgroundColor: getColour(Number.parseInt(numbers[3])),
        });
        break;
      case 5:
        setFiveStyle({
          backgroundColor: getColour(Number.parseInt(numbers[4])),
        });
        break;
      default:
        break;
    }
    setInput(input);
  };

  return (
    <div className="container">
      <div className="a one" style={oneStyle}></div>
      <div className="a two" style={twoStyle}></div>
      <div className="a three" style={threeStyle}></div>
      <div className="a four" style={fourStyle}></div>
      <div className="a five" style={fiveStyle}></div>

      <input
        className="colourInput"
        value={input}
        onChange={(e) => goTown(e.target.value)}
      ></input>
    </div>
  );
}

export default GrannySquare;
