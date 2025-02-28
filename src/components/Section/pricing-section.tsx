"use client";

import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Check, X } from "lucide-react";

const PricingCard = styled(Paper)(({ theme }) => ({
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

const ScrollContainer = styled(Box)({
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

const FeatureList = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: "24px 0",
  flex: 1,
});

const FeatureItem = styled("li")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),

  "& svg": {
    marginTop: "4px",
  },
}));

const RecommendedTag = styled("div")(({}) => ({
  position: "absolute",
  top: -12,
  right: 24,
  background: "#00C853",
  color: "white",
  padding: "4px 12px",
  borderRadius: 16,
  fontSize: 14,
  fontWeight: 500,
}));

const StyledButton = styled(Button)({
  backgroundColor: "#00C853",
  "&:hover": {
    backgroundColor: "#00B34A",
  },
});

const features = [
  {
    text: "Todos os cursos disponíveis e ilimitados",
    available: true,
  },
  {
    text: "Materiais complementares",
    available: true,
  },
  {
    text: "Avaliações periódicas",
    available: true,
  },
  {
    text: "Acesso online e offline",
    available: true,
  },
  {
    text: "Sorteios quinzenais de livros",
    available: false,
  },
  {
    text: "Orientações Teológicas",
    available: false,
  },
  {
    text: "Grupo exclusivo no WhatsApp",
    available: false,
  },
  {
    text: "Tutor Teológico",
    available: false,
  },
];

export const PricingSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const renderPricingCard = (isAnnual = false) => (
    <PricingCard sx={{ bgcolor: isAnnual ? "#FF5C00" : "#333333" }}>
      {isAnnual && <RecommendedTag>RECOMENDADO</RecommendedTag>}
      <Typography
        variant="h6"
        sx={{ color: "white", mb: 2, textTransform: "uppercase" }}
      >
        {isAnnual ? "Anual" : "Mensal"}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
        <Typography
          component="span"
          sx={{ color: "white", fontSize: "1rem", mt: 1 }}
        >
          R$
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontSize: { xs: "3.5rem", md: "4rem" },
            lineHeight: 1,
            fontWeight: 700,
          }}
        >
          {isAnnual ? "997,90" : "69,90"}
        </Typography>
        <Typography
          component="span"
          sx={{ color: "white", fontSize: "1rem", mt: 1, ml: 1 }}
        >
          /{isAnnual ? "ano" : "mês"}
        </Typography>
      </Box>
      {isAnnual && (
        <Typography
          sx={{
            color: "white",
            fontSize: "0.875rem",
            mb: 3,
            opacity: 0.8,
          }}
        >
          + taxas hotmart
        </Typography>
      )}
      <FeatureList>
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            sx={{
              opacity: !isAnnual && !feature.available ? 0.5 : 1,
              textDecoration:
                !isAnnual && !feature.available ? "line-through" : "none",
            }}
          >
            {isAnnual || feature.available ? (
              <Check size={20} color="white" />
            ) : (
              <X size={20} color="white" />
            )}
            <Typography
              sx={{
                color: "white",
                fontSize: "0.875rem",
              }}
            >
              {feature.text}
            </Typography>
          </FeatureItem>
        ))}
      </FeatureList>
      <StyledButton
        variant="contained"
        fullWidth
        sx={{
          mt: "auto",
          color: "white",
          fontSize: "1rem",
          py: 1.5,
          fontWeight: 600,
        }}
      >
        ASSINAR
      </StyledButton>
    </PricingCard>
  );

  return (
    <Box sx={{ py: { xs: 4, md: 8 }, bgcolor: "#1A1A1A" }}>
      <Container sx={{ px: { xs: 2, md: 3 } }}>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{
            color: "white",
            mb: { xs: 4, md: 6 },
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "2.5rem" },
          }}
        >
          Planos
        </Typography>

        {isMobile ? (
          <ScrollContainer>
            {renderPricingCard(false)}
            {renderPricingCard(true)}
          </ScrollContainer>
        ) : (
          <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
            <Box sx={{ flex: 1, minWidth: 280 }}>
              {renderPricingCard(false)}
            </Box>
            <Box sx={{ flex: 1, minWidth: 280 }}>{renderPricingCard(true)}</Box>
          </Box>
        )}

        <Box sx={{ color: "white", mt: 4 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
          >
            Acesso imediato:
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
          >
            Seu login e senha serão enviados ao seu e-mail logo após o
            processamento do pagamento.
          </Typography>
          <Typography
            variant="body2"
            color="gray"
            sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
          >
            Se não recebeu, dá uma olhadinha na sua caixa de SPAM, por favor!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
