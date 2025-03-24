import { Paper, Typography } from "@mui/material";
import type React from "react";

export const ImmediateAccess: React.FC = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        backgroundColor: "#e0e0e0",
        padding: { xs: "20px", md: "24px" },
        borderRadius: 3,
        width: "100%",
        maxWidth: "810px",
      }}
    >
      <Typography
        variant="h6"
        component="h3"
        fontWeight={600}
        sx={{
          fontSize: { xs: "20px", md: "24px" },
          marginBottom: "8px",
        }}
      >
        Acesso Imediato
      </Typography>
      <Typography
        variant="body2"
        color="text.primary"
        sx={{
          fontSize: { xs: "14px", md: "16px" },
          lineHeight: { xs: "17px", md: "19.5px" },
        }}
      >
        <b>
          Seu login e senha serão enviados ao seu e-mail logo após o
          processamento do pagamento.{" "}
        </b>
        Se não recebeu, dê uma olhada na caixa de spam do seu e-mail.
      </Typography>
    </Paper>
  );
};
