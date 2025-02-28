"use client";
import { Box, Button, Card, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const ImageWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: "20px",
  bottom: "0",
  width: "350px",
  height: "350px",
  [theme.breakpoints.up("md")]: {
    width: "502px",
    height: "502px",
    right: "-60px",
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: "white",
  borderRadius: "16px",
  padding: "40px 24px",
  position: "relative",
  overflow: "visible",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  maxWidth: "900px",
  boxShadow: theme.shadows[4],
  [theme.breakpoints.up("md")]: {
    padding: "48px 40px",
  },
}));

export const CertificateSection = () => {
  return (
    <Box sx={{ py: 20, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StyledCard>
            <Box sx={{ maxWidth: "60%" }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{ mb: 2, fontWeight: 600 }}
              >
                Certificado de Conclusão
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "white",
                  color: "primary.main",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.9)",
                  },
                }}
              >
                Inscreva-se!
              </Button>
            </Box>

            <ImageWrapper>
              <Image
                src="/people-circle.png"
                alt="Certificado"
                fill
                style={{
                  objectFit: "contain",
                }}
                priority
              />
            </ImageWrapper>
          </StyledCard>
        </Box>
      </Container>
    </Box>
  );
};
