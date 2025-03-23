"use client";

import { Box, Rating, Stack, Typography } from "@mui/material";
import { IReviewData } from "./MobileReviewsSection";
import { useEffect, useRef, useState } from "react";

export interface IReviewCardProps {
  data: IReviewData;
}

export const ReviewCard = ({ data }: IReviewCardProps) => {
  const textRef = useRef<HTMLElement | null>(null);
  const [isTruncated, setIsTruncated] = useState(true);

  useEffect(() => {
    const checkTruncation = () => {
      if (textRef.current) {
        const computedStyle = window.getComputedStyle(textRef.current);
        const lineHeight = parseFloat(computedStyle.lineHeight);
        const maxLines = parseInt(computedStyle.webkitLineClamp || "3", 10);
        const maxHeight = lineHeight * maxLines;

        setIsTruncated(textRef.current.clientHeight >= maxHeight);
      }
    };

    checkTruncation();
    window.addEventListener("resize", checkTruncation);
    return () => window.removeEventListener("resize", checkTruncation);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#575757",
        borderRadius: 2,
        px: 2,
        py: 2,
        color: "white",
        height: "100%",
      }}
    >
      <Stack gap={1}>
        <Typography fontWeight="bold" fontSize={20}>
          {data.name}
        </Typography>

        <Rating value={data.stars} readOnly />

        <Typography ref={textRef} className="ellipsis">
          {data.text}
        </Typography>

        {isTruncated && (
          <Typography
            fontSize={12}
            fontWeight="bold"
            color="rgba(255, 255, 255, 0.4)"
            sx={{ cursor: "pointer" }}
          >
            VER MAIS
          </Typography>
        )}
      </Stack>
    </Box>
  );
};
