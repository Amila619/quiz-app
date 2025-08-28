import { Box, Typography } from "@mui/material";
import { useState } from "react";

type QuizProps = {
  question: string;
  answers: string[];
};

export default function Quiz({ question, answers }: QuizProps) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Box
      sx={{
        maxWidth: "600px",
        width: "full",
        border: "1px solid",
        borderRadius: "12px",
        overflow: "hidden"
      }}
    >
      <Typography
        sx={{
          color: "indigo",
          bgcolor: "gray",
          px: 4,
          py: 2,
          ":hover": { color: "black" },
          fontSize: { xs: "1.5rem", sm: 24, md: "inherit" },
        }}
        variant="h3"
      >
        {question}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 2,
        }}
      >
        {answers.map((answer, idx) => (
          <Box
            key={idx}
            onClick={() => setSelected(idx)}
            sx={{
              p: 1,
              border: "1px solid",
              borderColor: selected === idx ? "indigo" : "#ccc",
              borderRadius: 2,
              textAlign: "center",
              cursor: "pointer",
              backgroundColor: selected === idx ? "lavender" : "transparent",
              transition: "0.3s",
            }}
          >
            <Typography>
              {answer}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
