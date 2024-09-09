import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="SonjaCodes Logo.png" className="SonjaCodes-logo" alt="logo" />
        <Weather city="Zurich" />
      </header>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
