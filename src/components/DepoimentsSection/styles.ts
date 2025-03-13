import { Box, Rating } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TestimonialCard = styled(Box)(({ theme }) => ({
  background: "#333333",
  borderRadius: "16px",
  padding: theme.spacing(3),
  height: "100%",
  minWidth: "280px",
  maxWidth: "320px",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),

  [theme.breakpoints.up("md")]: {
    minWidth: "unset",
    maxWidth: "none",
  },
}));

export const TestimonialText = styled(Box)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.1)",
  borderRadius: "12px",
  padding: theme.spacing(2),
}));

export const StyledRating = styled(Rating)({
  "& .MuiRating-icon": {
    color: "#FFD700",
  },
  "& .MuiRating-iconFilled": {
    color: "#FFD700",
  },
});

export const ScrollContainer = styled(Box)({
  overflowX: "auto",
  overflowY: "hidden",
  WebkitOverflowScrolling: "touch",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  scrollbarWidth: "none",
  display: "flex",
  gap: "16px",
  padding: "4px",
  marginLeft: "-16px",
  marginRight: "-16px",
  paddingLeft: "16px",
  paddingRight: "16px",
});

export const BackgroundWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#fff",
  overflow: "visible",

  "&::before": {
    content: "\"\"",
    position: "absolute",
    bottom: "-150px",
    left: "-100px",
    width: "535px",
    height: "547px",
    background: "url('/bg-circle-depoiments-left.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    zIndex: 1,
  },

  "&::after": {
    content: "\"\"",
    position: "absolute",
    bottom: "-700px",
    right: "-400px",
    width: "946px",
    height: "967px",
    background: "url('/bg-circle-depoiments-right.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    backgroundSize: "contain",
    zIndex: 0,
  },

  [theme.breakpoints.down("md")]: {
    "&::before": {
      width: "200px",
      height: "200px",
      bottom: "-100px",
    },
    "&::after": {
      width: "200px",
      height: "200px",
      bottom: "-100px",
    },
  },
}));