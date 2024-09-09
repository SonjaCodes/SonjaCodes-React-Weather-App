import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container className="App">
      <header className="App-header">
        <img src="SonjaCodes Logo.png" className="SonjaCodes-logo" alt="logo" />
        <Weather city="Zurich" />
      </header>

      <footer>
        <Footer />
      </footer>
    </Container>
  );
}

export default App;
