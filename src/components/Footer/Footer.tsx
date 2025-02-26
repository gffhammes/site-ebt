import { Box, Typography, Link } from "@mui/material";
import Image from "next/image";

export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#1C1C1C", py: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Link
          href="https://www.instagram.com/bibotalk"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "white",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body1" sx={{ color: "white" }}>
            Nos siga também no instagram!
          </Typography>
          <Image
            src="/instagram-logo.png"
            alt="Instagram"
            width={40}
            height={40}
          />
        </Link>

        <Typography
          variant="body2"
          sx={{
            color: "white",
            textAlign: "center",
            opacity: 0.8,
          }}
        >
          Escola Bibotalk de Teologia – ©2024 – Todos os Direitos Reservados!
        </Typography>
      </Box>
    </Box>
  );
};
