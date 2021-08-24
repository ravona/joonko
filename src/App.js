// material-ui:
import Container from "@material-ui/core/Container";

// pages:
import BecomeRemoteReadyPage from "./pages/BecomeRemoteReadyPage";

// styles:
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Container disableGutters>
        <BecomeRemoteReadyPage />
      </Container>
    </div>
  );
}

export default App;
