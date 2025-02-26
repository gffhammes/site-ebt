"use client";

import { styled } from "@mui/material/styles";
import { PhoneIcon as WhatsAppIcon } from "lucide-react";

const FloatingButton = styled("a")(() => ({
  position: "fixed",
  bottom: "2rem",
  right: "2rem",
  zIndex: 1100,
  backgroundColor: "#25D366",
  color: "#FFFFFF",
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
    boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.3)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#25D366",
    borderRadius: "50%",
    opacity: 0.4,
    animation: "pulse 2s infinite",
  },
  "@keyframes pulse": {
    "0%": {
      transform: "scale(1)",
      opacity: 0.4,
    },
    "50%": {
      transform: "scale(1.3)",
      opacity: 0,
    },
    "100%": {
      transform: "scale(1)",
      opacity: 0,
    },
  },
}));

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export const WhatsAppButton = ({
  phoneNumber,
  message = "Olá! Gostaria de saber mais sobre os cursos.",
}: WhatsAppButtonProps) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <FloatingButton
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contato via WhatsApp"
    >
      <WhatsAppIcon size={32} />
    </FloatingButton>
  );
};
