"use client";

import { Box, Paper, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import type React from "react";

export const InformationSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { xs: 3, md: 6 },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: { xs: "block", md: "none" },
          backgroundColor: theme.palette.primary.main,
          color: "white",
          padding: "24px",
          borderRadius: 3,
          position: "relative",
          mb: 2,
          width: "100%",
          maxWidth: "810px",
          overflow: "visible",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 700,
              fontSize: "32px",
              lineHeight: "39px",
              marginBottom: "16px",
              paddingRight: "80px",
            }}
          >
            Garantia de satisfação
          </Typography>

          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "17px",
              marginBottom: "16px",
            }}
          >
            Nós estamos tão confiantes no nosso método que{" "}
            <strong>oferecemos uma garantia incondicional:</strong>
          </Typography>

          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "19.5px",
              marginBottom: "8px",
            }}
          >
            7 dias para testar a plataforma.
          </Typography>

          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "17px",
              opacity: 0.9,
            }}
          >
            Você poderá pedir a devolução de 100% do seu dinheiro dentro desse
            prazo, sem se justificar. É só mandar um email para
            email@email.com.br e em até 30 dias após sua compra que o dinheiro
            volta pra sua conta.
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            right: "-10px",
            top: "-10px",
            width: "100px",
            height: "100px",
          }}
        >
          <Image
            src="/selo-qualidade.png"
            alt="100% Satisfação"
            width={100}
            height={100}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          display: { xs: "none", md: "block" },
          backgroundColor: theme.palette.primary.main,
          color: "white",
          padding: 4,
          borderRadius: 3,
          position: "relative",
          mb: 2,
          width: "100%",
          maxWidth: "810px",
          overflow: "visible",
        }}
      >
        <Box sx={{ position: "relative", pr: "180px" }}>
          <Typography
            variant="h5"
            component="h2"
            fontWeight={700}
            fontSize="48px"
            lineHeight="58.51px"
            gutterBottom
          >
            Garantia de satisfação
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "18.29px",
              opacity: 0.9,
              mb: 2,
            }}
          >
            Nós estamos tão confiantes no <br />
            nosso método que{" "}
            <b>
              oferecemos <br /> uma garantia incondicional:
            </b>
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              mb: 1,
              fontSize: "16px",
              lineHeight: "19.5px",
            }}
          >
            7 dias para testar a plataforma.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            Você poderá pedir a devolução de 100% do seu dinheiro dentro <br />
            desse prazo, sem se justificar. É só mandar um email para <br />
            email@email.com.br e em até 30 dias <br /> após sua compra que o
            dinheiro volta pra sua conta.
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            right: "-40px",
            top: "20px",
            width: "300px",
            height: "300px",
          }}
        >
          <Image
            src="/selo-qualidade.png"
            alt="100% Satisfação"
            width={337}
            height={337}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Paper>
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
    </Box>
  );
};
