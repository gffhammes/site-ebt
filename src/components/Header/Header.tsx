"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { MoveDown } from "lucide-react";
import Image from "next/image";

import { useBreakpoint } from "@/hooks/useBreakpoint";

const HeaderContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "115vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  color: theme.palette.common.white,
  overflow: "hidden",
  paddingBottom: "150px",
}));

const BackgroundImage = styled(Box)({
  position: "absolute",
  top: 0,
  right: 0,
  width: "100%",
  height: "100%",
  zIndex: 0,
});

const Content = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: theme.spacing(4),
}));

const ScrollArrow = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(4),
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 2,
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  color: theme.palette.common.white,
}));

export const Header = () => {
  const { sm, md } = useBreakpoint();
  const scrollToNextSection = () => {
    const featuresSection = document.querySelector("main > div:first-child");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const objectPosition = md ? "50% center" : sm ? "60% center" : "70% center";

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
            objectPosition: objectPosition,
          }}
        />
      </BackgroundImage>

      <Content>
        <Box sx={{ mb: { xs: "280px", sm: "250px", md: "260px" } }}>
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
          sx={(theme) => ({
            fontWeight: theme.typography.h2.fontWeight,
            fontSize: { xs: "16px", md: theme.typography.h2.fontSize },
            lineHeight: { xs: "19.5px", md: "39.01px" },
          })}
        >
          Chegou a hora de você
          <Box component="span" sx={{ display: "block", fontWeight: 400 }}>
            <b>aprender Teologia</b> de maneira
          </Box>
        </Typography>

        <Box sx={{ position: "relative" }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "120px", md: "152px" },
              lineHeight: { xs: "180px", md: "200px" },
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
        </Box>

        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={(theme) => ({
            borderRadius: theme.shape.borderRadius,
            padding: theme.spacing(2, 4),
            fontSize: "1.25rem",
            fontWeight: 700,
            textTransform: "none",
          })}
        >
          Acesse a nova turma da EBT!
        </Button>
      </Content>

      <ScrollArrow
        onClick={scrollToNextSection}
        style={{ marginBottom: "3rem" }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <MoveDown size={45} />
        </motion.div>
      </ScrollArrow>
    </HeaderContainer>
  );
};
