import { Box, Container, Stack, Typography } from "@mui/material";

export interface IAccessCardProps {}

export const AccessCard = (props: IAccessCardProps) => {
  return (
    <Box>
      <Container maxWidth="md">
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#d3d3d3",
            borderRadius: 4,
            px: { xs: 2, md: 6 },
            py: { xs: 4, md: 6 },
            position: "relative",
            boxShadow: 10,
            zIndex: 11,
          }}
        >
          <Stack gap={2}>
            <Typography variant="h2" fontSize={24} color="rgba(0, 0, 0, .8)">
              Acesso imediato
            </Typography>

            <Typography color="rgba(0, 0, 0, .8)">
              <strong>
                Seu login e senha serão enviados ao seu e-mail logo após o
                processamento do pagamento.
              </strong>{" "}
              <br />
              Se não recebeu, dá uma olhadinha na sua caixa de SPAM, por favor!
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
