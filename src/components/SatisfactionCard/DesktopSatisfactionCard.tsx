import { Box, Container, Stack, Typography } from "@mui/material";
import stamp from "../../../public/selo-garantia.png";
import Image from "next/image";

const stampAspectRatio = stamp.height / stamp.width;

export interface IDesktopSatisfactionCardProps {}

export const DesktopSatisfactionCard = (
  props: IDesktopSatisfactionCardProps
) => {
  return (
    <Box sx={{ background: "linear-gradient(#000 50%, #fff 50%)" }}>
      <Container maxWidth="md">
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#f4f4f4",
            borderRadius: 4,
            px: 6,
            py: 6,
            position: "relative",
            boxShadow: 10,
            zIndex: 11,
          }}
        >
          <Image
            unoptimized={false}
            src={stamp.src}
            height={300}
            width={300 / stampAspectRatio}
            alt="Garantia"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              zIndex: 0,
              transform: "translate(12%, -25%)",
            }}
          />

          <Stack gap={2} sx={{ position: "relative", zIndex: 1 }}>
            <Typography variant="h2" color="primary.main">
              Garantia de satisfação
            </Typography>

            <Typography maxWidth="40ch" color="rgba(0, 0, 0, .6)">
              Nós estamos tão confiantes no nosso método que{" "}
              <strong>oferecemos uma garantia incondicional:</strong>
            </Typography>

            <Typography
              fontWeight="bold"
              fontSize={24}
              lineHeight={1}
              color="primary.main"
            >
              7 dias para testar a plataforma.
            </Typography>

            <Typography color="rgba(0, 0, 0, .6)">
              Você poderá pedir a devolução de{" "}
              <strong>100% do seu dinheiro</strong> dentro desse prazo, sem se
              justificar.
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
