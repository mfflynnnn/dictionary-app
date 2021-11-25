import "./App.css";
import Dictionary from "./Dictionary";
import "./Dictionary.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer className="App-footer">
          This{" "}
          <a
            href="https://github.com/mfflynnnn/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            open source
          </a>
          &nbsp;dictionary app was coded by{" "}
          <a
            href="https://linktr.ee/mollymflynn"
            target="_blank"
            rel="noreferrer"
          >
            Molly Flynn
          </a>
          . High five!
        </footer>
      </div>
    </div>
  );
}

export default App;
