import logo from "./logo.svg";
import "./App.css";
import { Menu } from "./components/menu";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Menu />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Stronka o informacjach z weselem :)</p>
          <p>Mapka z dojazdem xd</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
