import { Box, Button, Paper, styled } from "@mui/material";

export const PricingCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  minWidth: "280px",
  maxWidth: "320px",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  position: "relative",

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4),
    minWidth: "unset",
    maxWidth: "none",
    height: "100%",
  },
}));

export const ScrollContainer = styled(Box)({
  overflowX: "auto",
  overflowY: "hidden",
  WebkitOverflowScrolling: "touch",
  "&::-webkit-scrollbar": { display: "none" },
  scrollbarWidth: "none",
  display: "flex",
  gap: "16px",
  padding: "4px",
  marginLeft: "-16px",
  marginRight: "-16px",
  paddingLeft: "16px",
  paddingRight: "16px",
});

export const FeatureList = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: "24px 0",
  flex: 1,
});

interface FeatureItemProps {
  isAvailable: boolean;
}

export const FeatureItem = styled("li")<FeatureItemProps>(
  ({ theme, isAvailable }) => ({
    display: "flex",
    alignItems: "flex-start",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2),
    opacity: isAvailable ? 1 : 0.5,
    textDecoration: isAvailable ? "none" : "line-through",

    "& svg": {
      marginTop: "4px",
    },
  })
);

export const RecommendedTag = styled("div")({
  position: "absolute",
  top: -12,
  right: 24,
  background: "#00C853",
  color: "white",
  padding: "4px 12px",
  borderRadius: 16,
  fontSize: 14,
  fontWeight: 500,
});

export const StyledButton = styled(Button)({
  backgroundColor: "#00C853",
  "&:hover": {
    backgroundColor: "#00B34A",
  },
  color: "white",
  fontSize: "1rem",
  py: 1.5,
  fontWeight: 600,
  mt: "auto",
});
