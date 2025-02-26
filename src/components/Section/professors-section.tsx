"use client";

import { Container, Typography, Grid, Avatar, Box } from "@mui/material";
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

const CircleDecoration = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.main,
  opacity: 0.1,
  left: "-150px",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: -1,
}));

export const ProfessorsSection = () => {
  return (
    <Box sx={{ position: "relative", py: 8, overflow: "hidden" }}>
      <CircleDecoration />
      <Container>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Professores
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {professors.map((professor) => (
            <Grid
              item
              xs={12}
              sm={6}
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
              <Typography variant="h6" component="h3" gutterBottom>
                {professor.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {professor.role}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
