"use client";

import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const HeaderContainer = styled("header")({
  position: "relative",
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  textAlign: "left",
  color: "white",
  paddingLeft: "5rem",
  background: "#1A1A1A",
  overflow: "hidden",
});

const BackgroundImage = styled("div")({
  position: "absolute",
  top: 0,
  right: 0,
  width: "60%", // Increased from 50% to show more of the image
  height: "100%",
  zIndex: 0,
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(90deg, #1A1A1A 0%, rgba(26,26,26,0.4) 100%)",
  },
});

const Content = styled(Container)({
  position: "relative",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "2rem",
  maxWidth: "600px",
});

export const Header = () => {
  return (
    <HeaderContainer>
      <BackgroundImage>
        <Image
          src="/bg-desktop-img.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="right center"
        />
      </BackgroundImage>

      <AppBar
        position="absolute"
        sx={{ background: "transparent", boxShadow: "none", width: "100%" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            padding: "1rem 2rem",
          }}
        >
          <Image src="/logo-ebt.svg" alt="EBT Logo" width={120} height={40} />
        </Toolbar>
      </AppBar>

      <Content>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            fontWeight: 600,
            lineHeight: 1.2,
          }}
        >
          Chegou a hora de você{" "}
          <Box component="span" sx={{ display: "block" }}>
            aprender Teologia
          </Box>{" "}
          de maneira{" "}
          <Box
            component="span"
            sx={{
              fontSize: { xs: "4rem", md: "5rem" },
              fontWeight: 700,
              display: "block",
            }}
          >
            fácil
          </Box>
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            borderRadius: "8px",
            padding: "1rem 2rem",
            fontSize: "1.25rem",
            textTransform: "none",
          }}
        >
          Acesse a nova turma da EBT!
        </Button>
      </Content>
    </HeaderContainer>
  );
};
