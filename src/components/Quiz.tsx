import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";

type QuizProps = {
  no: number;
  question: string;
  answers: string[];
};

export default function Quiz({ question, answers, no }: QuizProps) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Box
      sx={{
        maxWidth: 600,
        width: "100%",
        borderRadius: 3,
        overflow: "hidden",
        p: 2,
        mx: "auto",
      }}
    >
      <Box sx={{
        backgroundColor: "primary.main",
        color: "white",
        width: 48,
        height: 48,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: 2
      }}>
        <Typography variant="h5">{no < 10 ? `0${no}` : no}</Typography>
      </Box>
      <Box>
        <Typography
          variant="body1"
          sx={{
            color: "Black",
            fontWeight: 400,
            mb: 2,
          }}
        >
          {question}
        </Typography>
      </Box>
      <Box sx={{ display: "grid", gap: 2 }}>
        {answers.map((answer, idx) => (
          <Box
            key={idx}
            onClick={() => setSelected(idx)}
            sx={{
              display: "flex",
              p: 1.5,
              justifyContent: "space-between",
              border: "1px solid",
              borderRadius: "8px",
              textAlign: "center",
              cursor: "pointer",
              backgroundColor:
                selected === idx ? "primary.main" : "background.paper",
              color: selected === idx ? "white" : "primary.light",
              transition: "0.3s",
              "&:hover": {
                backgroundColor:
                  selected === idx ? "primary.light" : "grey.100",
              },
            }}
          >
            <CheckCircleIcon
              sx={{
                color: selected === idx ? "white" : "transparent",
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "95%",
                mx: "auto",
              }}
            >
              <Typography variant="body1">{answer}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
