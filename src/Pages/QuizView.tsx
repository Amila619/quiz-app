import { Box, Button, Typography } from "@mui/material";
import Quiz from "../components/Quiz";

export default function QuizView() {
  type Question = {
    no: number;
    question: string;
    answers: string[];
    correctAnswer: number;
  };

  const questionProps: Question = {
    no: 2,
    question:
      "Which city, known for its iconic Eiffel Tower, historic art museums, and as a global center of culture, fashion, and gastronomy, serves as the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: 2,
  };

  const buttonStyles_01 = {
    backgroundColor: "primary.main",
    border: "2px solid",
    borderColor: "primary.main",
    color: "white",
    px: 4,
    fontSize: 12,
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "white",
      color: "primary.main",
    },
  };

  const buttonStyles_02 = {
    backgroundColor: "white",
    border: "2px solid",
    borderColor: "primary.main",
    color: "primary.main",
    px: 4,
    fontSize: 12,
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "primary.main",
      color: "white",
    },
  };

  //   const answeredArray: number[] = [
  //     1, 2, 3,
  //   ]

  const numArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  type QuesionNavigatorProps = {
    idx: number;
  };

  const QuestionNavigator = ({ idx }: QuesionNavigatorProps) => {
    return (
      <Box
        sx={{
          border: "1px solid",
          borderColor: "primary.main",
          width: 32,
          height: 48,
        }}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "primary.light",
            },
            width: "full",
            height: "60%",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">{idx}</Typography>
        </Box>
      </Box>
    );
  };

  const QuestionNavigatorPane = () => {
    return (
      <Box
        sx={{
          maxWidth: 300,
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)", // 5 elements per row
          gap: 2,
          cursor: "pointer",
        }}
      >
        {numArray.map((q) => (
          <QuestionNavigator key={q} idx={q} />
        ))}
      </Box>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}
    >
      <Box>
        <Quiz {...questionProps} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
            mt: 3,
          }}
        >
          <Button sx={buttonStyles_01}>Prev</Button>
          <Button sx={buttonStyles_02}>Next</Button>
        </Box>
      </Box>
      <QuestionNavigatorPane />
    </Box>
  );
}
