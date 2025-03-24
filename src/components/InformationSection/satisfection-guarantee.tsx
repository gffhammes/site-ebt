"use client";

import { Box, Paper, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import type React from "react";

interface SatisfactionGuaranteeProps {
  isMobile?: boolean;
}

export const SatisfactionGuarantee: React.FC<SatisfactionGuaranteeProps> = ({
  isMobile = false,
}) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={3}
      sx={{
        display: isMobile
          ? { xs: "block", md: "none" }
          : { xs: "none", md: "block" },
        backgroundColor: theme.palette.primary.main,
        color: "white",
        padding: isMobile ? "24px" : 4,
        borderRadius: 3,
        position: "relative",
        mb: 2,
        width: "100%",
        maxWidth: "810px",
        overflow: "visible",
      }}
    >
      <Box sx={{ position: "relative", pr: isMobile ? "80px" : "180px" }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontWeight: 700,
            fontSize: isMobile ? "32px" : "48px",
            lineHeight: isMobile ? "1.2" : "58.51px",
            marginBottom: isMobile ? "16px" : "8px",
          }}
        >
          Garantia de satisfação
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 400,
            fontSize: isMobile ? "16px" : "15px",
            lineHeight: isMobile ? "1.5" : "18.29px",
            opacity: 0.9,
            mb: isMobile ? "24px" : 2,
          }}
        >
          Nós estamos tão confiantes no nosso método que{" "}
          <b>oferecemos uma garantia incondicional:</b>
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "1.4",
            mb: isMobile ? "16px" : 1,
          }}
        >
          7 dias para testar a plataforma.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            opacity: 0.9,
            fontSize: isMobile ? "16px" : "inherit",
            lineHeight: isMobile ? "1.5" : "inherit",
          }}
        >
          Você poderá pedir a devolução de 100% do seu dinheiro dentro desse
          prazo, sem se justificar. É só mandar um email para{" "}
          <b>email@email.com.br</b> e em até 30 dias após sua compra que o
          dinheiro volta pra sua conta.
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          right: isMobile ? "-10px" : "-40px",
          top: isMobile ? "-10px" : "0px",
          width: isMobile ? "100px" : "300px",
          height: isMobile ? "100px" : "300px",
        }}
      >
        <Image
          src="/selo-qualidade.png"
          alt="100% Satisfação"
          width={isMobile ? 100 : 337}
          height={isMobile ? 100 : 337}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
    </Paper>
  );
};
