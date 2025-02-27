"use client";

import {
  Box,
  Button,
  Container,
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
  justifyContent: "center",
  alignItems: "flex-start",
  textAlign: "left",
  color: "white",
  paddingLeft: "2rem",
  background: "#1A1A1A",
  overflow: "hidden",
  [theme.breakpoints.up("md")]: {
    paddingLeft: "5rem",
  },
}));

const BackgroundImage = styled("div")(({ theme }) => ({
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
    width: "60%",
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
          objectPosition="right center"
        />
      </BackgroundImage>

      <Content>
        <Box
          sx={{
            marginBottom: { xs: "450px", md: "300px" },
          }}
        >
          <Image src="/logo-topo.png" alt="EBT Logo" width={200} height={40} />
        </Box>

        <Typography
          variant="h1"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "16px", md: "32px" },
            lineHeight: { xs: "19.5px", md: "39.01px" },
            letterSpacing: "0%",
          }}
        >
          Chegou a hora de você
          <Box component="span" sx={{ display: "block", fontWeight: 500 }}>
            <b>aprender Teologia</b> de maneira
          </Box>
          <Box
            component="span"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: "175px",
              lineHeight: { xs: "180px", md: "200px" },
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
