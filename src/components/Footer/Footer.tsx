import { Box, Container, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";

export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#000", py: 10 }}>
      <Container>
        <Stack gap={8} alignItems="center">
          <Stack gap={2} alignItems="center">
            <Typography variant="body1" sx={{ color: "white" }}>
              Nos siga também no instagram!
            </Typography>

            <Link
              href="https://www.instagram.com/bibotalk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/instagram-logo.png"
                alt="Instagram"
                width={74}
                height={74}
              />
            </Link>
          </Stack>

          <Typography
            variant="body2"
            sx={{
              color: "white",
              textAlign: "center",
              opacity: 0.8,
            }}
          >
            {new Date().getFullYear()} © Escola Bibotalk de Teologia
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
