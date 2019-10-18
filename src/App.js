import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";

import Background from "./components/Background.js";

function App() {
  const c1 = "Ciarán Ó hAoláin.";
  const c2 = "I write software.";

  const [cp1, ucp1] = useState("");
  const [cp2, ucp2] = useState("");

  const speed = 100;

  setTimeout(() => {
    if (cp1.length < c1.length) {
      ucp1(cp1 + c1.charAt(cp1.length));
    } else if (cp2.length < c2.length) {
      ucp2(cp2 + c2.charAt(cp2.length));
    }
  }, speed);

  console.log("hi");

  return (
    <div className="App">
      <Background />
      <div className="header-container">
        <h1 className="typewriter primary">{cp1}</h1>
        <h3 className="typewriter secondary">{cp2}</h3>
      </div>
    </div>
  );
}

export default App;
