import React, { useState } from "react"
import ReactDOM from "react-dom/client";
import "../styles/index.css";

function TrafficLight() {
  const [color, setColor] = useState("red");
  const changeColor = () => {
    if (color === "red") setColor("yellow");
    else if (color === "yellow") setColor ("green");
    else setColor("red");
  }
  return (
    <div className="traffic-light">
      <div className={"light red" + (color === "red" ? " selected" : "")}
      onClick={() => setColor("red")}
      ></div>
    <div
    className={"light yellow" + (color ==="yellow" ? " selected" : "")}
    onClick={() => setColor("yellow")}
    ></div>
    <div
        className={"light green" + (color ==="green" ? " selected" : "")}
    onClick={() => setColor("green")}
    ></div>
        <button onClick={changeColor}>Cambiar color</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<TrafficLight />);
