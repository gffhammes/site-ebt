"use client";

import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const HeaderContainer = styled("header")(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  color: "white",
  background: "#1A1A1A",
  overflow: "hidden",
  padding: 0,

  [theme.breakpoints.up("md")]: {
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign: "left",
    paddingLeft: "5rem",
  },
}));

const BackgroundImage = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  width: "100%",
  height: "100%",
  zIndex: 0,
  "&::after": {
    // eslint-disable-next-line quotes
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "transparent",

    [theme.breakpoints.up("md")]: {
      background: "linear-gradient(90deg, #1A1A1A 0%, rgba(26,26,26,0.4) 100%)",
    },
  },

  [theme.breakpoints.up("md")]: {
    right: 0,
    width: "60%",
  },
}));

const Content = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  padding: "0 1.5rem 3rem 1.5rem",
  width: "100%",
  maxWidth: "100%",
  marginTop: "auto",

  [theme.breakpoints.up("md")]: {
    alignItems: "flex-start",
    gap: "2rem",
    maxWidth: "600px",
    padding: 0,
    marginTop: 0,
  },
}));

export const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <HeaderContainer>
      <BackgroundImage>
        <Image
          src={isMobile ? "/header-mobile.png" : "/bg-desktop-img.png"}
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          priority
        />
      </BackgroundImage>

      <AppBar
        position="absolute"
        sx={{ background: "transparent", boxShadow: "none", width: "100%" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", md: "flex-start" },
            padding: { xs: "1rem 1.5rem", md: "1rem 2rem" },
          }}
        >
          <Image
            src="/logo-ebt.svg"
            alt="EBT Logo"
            width={isMobile ? 100 : 120}
            height={isMobile ? 33 : 40}
          />
        </Toolbar>
      </AppBar>

      <Content>
        {isMobile ? (
          <>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                fontWeight: 400,
                lineHeight: 1.2,
                mb: 0.5,
              }}
            ></Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                fontWeight: 400,
                lineHeight: 1.2,
                mb: 1,
              }}
            >
              <Box component="span" sx={{ fontWeight: 600 }}>
                aprender Teologia
              </Box>{" "}
              de maneira
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: "5rem",
                fontWeight: 700,
                lineHeight: 1,
                mb: 2,
              }}
            >
              fácil
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                borderRadius: "2rem",
                padding: "0.75rem 1.5rem",
                fontSize: "1rem",
                textTransform: "none",
                width: "100%",
                maxWidth: "300px",
              }}
            >
              Acesse a nova turma da EBT!
            </Button>
          </>
        ) : (
          <>
            <Typography
              variant="h1"
              sx={{
                fontSize: { md: "3.5rem" },
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
                  fontSize: { md: "5rem" },
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
          </>
        )}
      </Content>
    </HeaderContainer>
  );
};
