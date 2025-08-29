import { Container } from "@mui/material";
import QuizView from "./Pages/QuizView";

function App() {

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <QuizView />
    </Container>
  );
}

export default App;
