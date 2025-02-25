"use client";

import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const Header = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", boxShadow: "none" }}
    >
      <Box
        sx={{
          position: "relative",
          height: { xs: "400px", md: "600px" },
          backgroundImage: "url('/headerimg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 200,
                  color: "#FFFFFF",
                  fontSize: "25px",
                  lineHeight: 1.2,
                }}
              >
                Chegou a hora de você
                <br />
                <Box component="span" fontWeight="bold">
                  aprender Teologia
                </Box>{" "}
                de maneira
                <br />
                <Box component="span" fontSize="65px" fontWeight="medium">
                  fácil
                </Box>
              </Typography>

              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  mt: 3,
                  backgroundColor: theme.palette.primary.main,
                  color: "#FFFFFF",
                  fontWeight: 700,
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }}
              >
                Acesse a nova turma da EBT!
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </AppBar>
  );
};
