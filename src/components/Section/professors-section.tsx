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

const professors = [
  { id: 1, name: "Nome do Professor", role: "Área de Formação" },
  { id: 2, name: "Nome do Professor", role: "Área de Formação" },
  { id: 3, name: "Nome do Professor", role: "Área de Formação" },
  { id: 4, name: "Nome do Professor", role: "Área de Formação" },
  { id: 5, name: "Nome do Professor", role: "Área de Formação" },
  { id: 6, name: "Nome do Professor", role: "Área de Formação" },
];

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
    <Box sx={{ position: "relative", py: 8, bgcolor: "white" }}>
      <Container>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              color: "black",
              mb: 2,
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
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: "black",
            }}
          >
            Professores
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {professors.map((professor) => (
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

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <StyledButton variant="contained">
            Acesse a nova turma da EBT!
          </StyledButton>
        </Box>
      </Container>
    </Box>
  );
};
