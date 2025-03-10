"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HeaderContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "110vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  textAlign: "left",
  color: "white",
  background: "#1A1A1A",
  overflow: "hidden",
}));

const BackgroundImage = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  width: "100%",
  height: "100%",
  zIndex: 0,
  "&::after": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(90deg, #1a1a1a 0%, rgba(26, 26, 26, 0) 100%)",
  },
  [theme.breakpoints.up("md")]: {
    width: "80%",
  },
}));

const Content = styled(Container)({
  position: "relative",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "2rem",
});

export const Header = () => {
  return (
    <HeaderContainer>
      <BackgroundImage>
        <Image
          src="/bg-desktop-img.png"
          alt="Background"
          fill
          sizes="100vw"
          priority
          style={{
            objectFit: "cover",
            objectPosition: "right center",
          }}
        />
      </BackgroundImage>

      <Content>
        <Box sx={{ marginBottom: { xs: "450px", md: "260px" } }}>
          <Image
            src="/logo-topo.png"
            alt="EBT Logo"
            width={225}
            height={50}
            priority
          />
        </Box>

        <Typography
          variant="h2"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "16px", md: "32px" },
            lineHeight: { xs: "19.5px", md: "39.01px" },
          }}
        >
          Chegou a hora de você
          <Box component="span" sx={{ display: "block", fontWeight: 500 }}>
            <b>aprender Teologia</b> de maneira
          </Box>
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "120px", md: "152px" },
            lineHeight: { xs: "180px", md: "200px" },
            display: "block",
            position: "relative",
          }}
        >
          <Box
            component="span"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              fontSize: "200px",
              fontWeight: 700,
              color: "transparent",
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.5)",
              zIndex: -1,
            }}
          >
            fácil
          </Box>
          fácil
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            borderRadius: "8px",
            padding: "1rem 2rem",
            fontSize: "1.25rem",
            fontWeight: 700,
            textTransform: "none",
          }}
        >
          Acesse a nova turma da EBT!
        </Button>
      </Content>
    </HeaderContainer>
  );
};
