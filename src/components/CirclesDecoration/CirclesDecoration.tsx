import { Box } from "@mui/material";

export interface ICirclesDecorationProps {
  circleSize: number;
  containerHeight: number;
  xAlign: "left" | "right";
  yAlign: "top" | "bottom";
  padding?: {
    top?: number;
    bottom?: number;
  };
}

export const CirclesDecoration = ({
  circleSize,
  containerHeight,
  xAlign,
  yAlign,
  padding,
}: ICirclesDecorationProps) => {
  return (
    <Box
      sx={{
        pt: padding?.top,
        pb: padding?.bottom,
      }}
    >
      <Box
        sx={{
          height: containerHeight,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            height: circleSize,
            width: circleSize,
            borderRadius: circleSize,
            border: "1px solid",
            borderColor: "primary.main",
            position: "absolute",
            top: yAlign === "bottom" ? 0 : "unset",
            bottom: yAlign === "top" ? 0 : "unset",

            left: xAlign === "right" ? 30 : "unset",
            right: xAlign === "left" ? 50 : "unset",
          }}
        />

        <Box
          sx={{
            height: circleSize,
            width: circleSize,
            borderRadius: circleSize,
            border: "1px solid",
            borderColor: "primary.main",
            position: "absolute",
            top: yAlign === "bottom" ? 30 : "unset",
            bottom: yAlign === "top" ? 30 : "unset",

            left: xAlign === "right" ? 10 : "unset",
            right: xAlign === "left" ? 0 : "unset",
          }}
        />
      </Box>
    </Box>
  );
};
