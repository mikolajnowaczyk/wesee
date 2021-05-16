import "./App.css";
import { Menu } from "./components/menu";
import { Hero } from "./components/hero";
import { Info } from "./components/info";
import { QA } from "./components/QA";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const infoRef = React.createRef();
  const QARef = React.createRef();
  return (
    <>
      <Menu refs={{infoRef: infoRef, QARef: QARef}}/>
      <Hero />
      <Info ref={infoRef} />
      <QA ref={QARef}/>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>Stronka o informacjach z weselem :)</p>
          <p>Mapka z dojazdem xd</p>
        </header>
      </div>
    </>
  );
}

export default App;
