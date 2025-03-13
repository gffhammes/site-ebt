"use client";

import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

import type { Professor } from "@/@types/professor";
import professorsData from "@/data/professors-data.json";

const BackgroundCircle = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: "-15%",
  top: "45%",
  transform: "translateY(-50%)",
  width: "50%",
  height: "90%",
  zIndex: 0,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(15),
  height: theme.spacing(15),
  border: `3px solid ${theme.palette.primary.main}`,
  marginBottom: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "2rem",
  padding: "0.75rem 2rem",
  fontSize: "1rem",
  textTransform: "none",
  marginTop: theme.spacing(6),
  backgroundColor: "#FF5C00",
  "&:hover": {
    backgroundColor: "#e65200",
  },
}));

export const ProfessorsSection = () => {
  return (
    <Box
      sx={{ position: "relative", py: 8, bgcolor: "white", overflow: "hidden" }}
    >
      <BackgroundCircle>
        <Image
          src="/bg-circle-professors.png"
          alt=""
          fill
          sizes="50vw"
          style={{
            objectFit: "contain",
          }}
          priority
        />
      </BackgroundCircle>

      <Container
        sx={{
          position: "relative",
          paddingTop: "150px",
          paddingBottom: "80px",
        }}
      >
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              color: "black",
              mb: 6,
              fontSize: { xs: "1.25rem", md: "1.5rem" },
            }}
          >
            Quem serão os responsáveis por <br />
            responder as suas dúvidas?
          </Typography>
          <Typography
            variant="h2"
            component="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2.5rem", md: "5.5rem" },
              color: "black",
            }}
          >
            Professores
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {professorsData.map((professor: Professor) => (
            <Grid
              item
              xs={6}
              md={4}
              key={professor.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <StyledAvatar src={`/professor-${professor.id}.jpg`} />
              <Typography
                variant="h6"
                component="h4"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  color: "black",
                }}
              >
                {professor.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  maxWidth: "200px",
                  margin: "0 auto",
                  color: "black",
                }}
              >
                {professor.role}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}
        >
          <StyledButton variant="contained">
            Acesse a nova turma da EBT!
          </StyledButton>
        </Box>
      </Container>
    </Box>
  );
};
