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
          This dictionary app was coded by Molly Flynn. High five!
        </footer>
      </div>
    </div>
  );
}

export default App;
