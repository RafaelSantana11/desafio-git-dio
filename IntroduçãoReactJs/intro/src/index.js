import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import "./styles.css";

function soma(a, b) {
  alert(a + b);
}

function primeiroJSX() {
  return (
    <div>
      <h2>RafaelSantana - Introdução ao React</h2>
      <Button onClick={() => soma(10, 20)} name="RafaelSantana" />
    </div>
  );
}

const App = () => {
  return <div className="App">{primeiroJSX()}</div>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
