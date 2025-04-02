import { Box, Container, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { DiretoRow } from "../DiretoRow";

export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#000" }} component="footer">
      <Container sx={{ py: 10 }}>
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
        </Stack>
      </Container>

      <DiretoRow />
    </Box>
  );
};
