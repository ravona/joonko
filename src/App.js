// material-ui:
import Container from "@material-ui/core/Container";

// pages:
import RemotePage from "./pages/remote";

// styles:
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Container disableGutters>
        <RemotePage />
      </Container>
    </div>
  );
}

export default App;
