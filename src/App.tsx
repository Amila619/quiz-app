import { Container } from "@mui/material";
import Quiz from "./components/Quiz";

function App() {
  type Question = {
    question: string;
    answers: string[];
    correctAnswer: number;
  };

  const questionProps: Question = {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: 2,
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Quiz {...questionProps} />
    </Container>
  );
}

export default App;
