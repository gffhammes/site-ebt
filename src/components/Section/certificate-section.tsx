"use client";

import { Box, Container, Button, Typography } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  position: "relative",
  overflow: "hidden",
}));

const CertificateCard = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  borderRadius: "24px",
  padding: theme.spacing(4),
  position: "relative",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  overflow: "hidden",
  maxWidth: "900px",
  margin: "0 auto",
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  maxWidth: "60%",
  zIndex: 1,
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

export const CertificateSection = () => {
  return (
    <SectionWrapper>
      <Container>
        <CertificateCard>
          <ContentWrapper>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Certificado de Conclusão
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
              Receba seu certificado ao concluir o curso e comprove seu
              conhecimento em Teologia.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "primary.main",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.9)",
                },
              }}
            >
              Clique aqui e inscreva-se!
            </Button>
          </ContentWrapper>
          <Box
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
              height: "100%",
              width: "40%",
            }}
          >
            <Image
              src="/people-circle.png"
              alt=""
              layout="fill"
              objectFit="contain"
              objectPosition="right center"
            />
          </Box>
        </CertificateCard>
      </Container>
    </SectionWrapper>
  );
};
