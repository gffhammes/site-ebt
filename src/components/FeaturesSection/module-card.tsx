"use client";

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const StyledCard = styled(Box)(({ theme }) => ({
  position: "relative",
  height: 350,
  width: 226,
  borderRadius: theme.shape.borderRadius,
  overflow: "hidden",
  boxShadow: theme.shadows[2],
  margin: "0 auto",
  [theme.breakpoints.down("md")]: {
    width: 180,
    height: 280,
    flexShrink: 0,
  },
}));

const CardOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background:
    "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: "16px",
});

interface ModuleCardProps {
  id: string | number;
  title: string;
  description: string;
  image: string;
}

export const ModuleCard = ({
  id,
  title,
  description,
  image,
}: ModuleCardProps) => {
  return (
    <StyledCard key={id}>
      <Image
        unoptimized={false}
        src={image || "/placeholder.svg"}
        alt={title}
        layout="fill"
        objectFit="cover"
      />
      <CardOverlay>
        <Typography variant="h6" component="h3" sx={{ color: "white", mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "white" }}>
          {description}
        </Typography>
      </CardOverlay>
    </StyledCard>
  );
};
