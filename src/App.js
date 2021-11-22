import "./App.css";
import Dictionary from "./Dictionary";
import "./Dictionary.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Hello world!</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          This dictionary app was coded by Molly Flynn. High five!
        </footer>
      </div>
    </div>
  );
}

export default App;
