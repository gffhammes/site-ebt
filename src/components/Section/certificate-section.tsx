"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  position: "relative",
  overflow: "hidden",

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(8, 0),
  },
}));

const CertificateCard = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  borderRadius: "16px",
  padding: theme.spacing(3),
  position: "relative",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  overflow: "hidden",
  margin: "0 auto",

  [theme.breakpoints.up("md")]: {
    borderRadius: "24px",
    padding: theme.spacing(4),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "900px",
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  zIndex: 1,
  position: "relative",

  [theme.breakpoints.up("md")]: {
    maxWidth: "60%",
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: "-20%",
  top: "50%",
  transform: "translateY(-50%)",
  height: "120%",
  width: "60%",
  opacity: 0.8,

  [theme.breakpoints.up("md")]: {
    right: 0,
    top: 0,
    transform: "none",
    height: "100%",
    width: "40%",
    opacity: 1,
  },
}));

export const CertificateSection = () => {
  return (
    <SectionWrapper>
      <Container sx={{ px: { xs: 2, md: 3 } }}>
        <CertificateCard>
          <ContentWrapper>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.5rem", md: "2rem" },
                mb: { xs: 1, md: 2 },
              }}
            >
              Certificado de Conclusão
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: { xs: 2, md: 3 },
                opacity: 0.9,
                fontSize: { xs: "0.875rem", md: "1rem" },
                maxWidth: { xs: "70%", md: "100%" },
              }}
            >
              Receba seu certificado ao concluir o curso e comprove seu
              conhecimento em Teologia.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "primary.main",
                fontSize: { xs: "0.875rem", md: "1rem" },
                px: { xs: 3, md: 4 },
                py: { xs: 1, md: 1.5 },
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.9)",
                },
              }}
            >
              Inscreva-se!
            </Button>
          </ContentWrapper>
          <ImageWrapper>
            <Image
              src="/people-circle.png"
              alt=""
              layout="fill"
              objectFit="contain"
              objectPosition="right center"
              priority
            />
          </ImageWrapper>
        </CertificateCard>
      </Container>
    </SectionWrapper>
  );
};
