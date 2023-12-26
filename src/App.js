import Container from "./components/Container/Container";
import css from "./App.module.css";
function App() {
  return (
    <Container>
      <header>
        <p className={css.title}>Test</p>
        <ul>
          <li>1</li> <li>2</li> <li>3</li>
        </ul>
      </header>
    </Container>
  );
}

export default App;
