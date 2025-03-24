import { Box, Container, Stack, Typography } from "@mui/material";

export interface IAccessCardProps {}

export const AccessCard = (props: IAccessCardProps) => {
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, .2)",
          borderRadius: 4,
          px: 2,
          py: 4,
          boxShadow: 10,
        }}
      >
        <Stack gap={2} sx={{ position: "relative", zIndex: 1 }}>
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
  );
};
