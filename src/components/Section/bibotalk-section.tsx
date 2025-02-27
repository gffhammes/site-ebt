"use client";

import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";

const BibotalkContent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "background.default",
        py: { xs: 4, md: 6 },
      }}
    >
      <Box
        sx={{
          backgroundColor: "black",
          py: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: { xs: 4, md: 6 },
        }}
      >
        <Image
          src="/bibotalk.png"
          alt="Bibotalk"
          width={isMobile ? 160 : 200}
          height={isMobile ? 48 : 60}
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </Box>

      <Container sx={{ px: { xs: 2, md: 3 } }}>
        <Box sx={{ position: "relative", maxWidth: 800, mx: "auto" }}>
          <Box
            sx={{
              position: "absolute",
              top: -20,
              right: -20,
              width: "150px",
              height: "150px",
              zIndex: 0,
            }}
          >
            <Image
              src="/curve-orange.png"
              alt=""
              width={150}
              height={150}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>

          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.5rem" },
              fontWeight: 600,
              mb: { xs: 2, md: 3 },
              position: "relative",
              zIndex: 1,
            }}
          >
            Mas afinal, quem é o{" "}
            <Box component="span" sx={{ display: "block" }}>
              Bibo?
            </Box>
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.125rem" },
                lineHeight: 1.6,
              }}
            >
              Rodrigo Luis de Aquino, conhecido como Bibo, é um teólogo de 42
              anos, casado e pai de dois filhos.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.125rem" },
                lineHeight: 1.6,
              }}
            >
              Formado em teologia pela Faculdade Luterana de Teologia, com
              especialização em aconselhamento cristão e mestrado pela FABAPAR,
              ele fundou o site e podcast Bibotalk em 2011 para tornar o estudo
              da teologia e da Bíblia mais acessível.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.125rem" },
                lineHeight: 1.6,
              }}
            >
              O Bibotalk já conta com mais de 430 episódios e 11 milhões de
              downloads. No YouTube, seu canal tem mais de 117 mil inscritos e 4
              milhões de visualizações.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.125rem" },
                lineHeight: 1.6,
              }}
            >
              Apaixonado por café e chocolate, Bibo não gosta muito de saladas e
              curte assistir a filmes e séries (inclusive gostou do final de
              LOST).
            </Typography>

            {/* Image for mobile */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "300px",
                display: { xs: "block", md: "none" },
                mt: 2,
              }}
            >
              <Image
                src="/bibo-photo.png"
                alt="Bibo usando laptop"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                right: -100,
                bottom: -40,
                width: "400px",
                height: "400px",
                display: { xs: "none", md: "block" },
                zIndex: 0,
              }}
            >
              <Image
                src="/bibo-photo.png"
                alt="Bibo usando laptop"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export const BibotalkSection = () => {
  return <BibotalkContent />;
};
