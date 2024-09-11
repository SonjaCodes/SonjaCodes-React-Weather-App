import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <Container className="App-Container">
        <header className="App-header">
          <img
            src="SonjaCodes Logo.png"
            className="SonjaCodes-logo"
            alt="logo"
          />
        </header>
        <main>
          <Weather />
          <Forecast />
        </main>
      </Container>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
