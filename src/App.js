import "./App.css";
import { Menu } from "./components/menu";
import { Hero } from "./components/hero";
import { Info } from "./components/info";
import { QA } from "./components/QA";
import { MapComponent } from "./components/mapComponent";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";    
function App() {
  const infoRef = React.createRef();
  const heroRef = React.createRef();
  const QARef = React.createRef();
  const mapsRef = React.createRef();
  return (
    <>
      <Menu
        refs={{
          infoRef: infoRef,
          QARef: QARef,
          mapsRef: mapsRef,
          heroRef: heroRef,
        }}
      />
      <Hero ref={heroRef} />
      <Info ref={infoRef} />
      <QA ref={QARef} />
      <MapComponent ref={mapsRef} />
    </>
  );
}

export default App;
