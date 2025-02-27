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
import { Check } from "lucide-react";
import Image from "next/image";

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

const GuaranteeCard = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
  color: "white",
  position: "relative",
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4),
    marginTop: theme.spacing(6),
  },
}));

const features = [
  "Todos os cursos disponíveis e ilimitados",
  "Materiais complementares",
  "Avaliações periódicas",
  "Acesso online e offline",
  "Sorteios quinzenais de livros",
  "Orientações Teológicas",
  "Grupo exclusivo no WhatsApp",
  "Tutor Teológico",
];

export const PricingSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
            <PricingCard sx={{ bgcolor: "#333333" }}>
              <Typography variant="h6" sx={{ color: "white", mb: 2 }}>
                MENSAL
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: "white",
                  mb: 3,
                  fontSize: "2rem",
                }}
              >
                R$ 69,90
                <Typography
                  component="span"
                  variant="body1"
                  sx={{ color: "white", ml: 1 }}
                >
                  /mês
                </Typography>
              </Typography>
              <FeatureList>
                {features.map((feature, index) => (
                  <FeatureItem key={index}>
                    <Check size={20} color="white" />
                    <Typography sx={{ color: "white", fontSize: "0.875rem" }}>
                      {feature}
                    </Typography>
                  </FeatureItem>
                ))}
              </FeatureList>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: "auto" }}
              >
                ASSINAR
              </Button>
            </PricingCard>

            <PricingCard
              sx={{ bgcolor: (theme) => theme.palette.primary.main }}
            >
              <RecommendedTag>RECOMENDADO</RecommendedTag>
              <Typography variant="h6" sx={{ color: "white", mb: 2 }}>
                ANUAL
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: "white",
                  mb: 3,
                  fontSize: "2rem",
                }}
              >
                R$ 997,90
                <Typography
                  component="span"
                  variant="body1"
                  sx={{ color: "white", ml: 1 }}
                >
                  /ano
                </Typography>
              </Typography>
              <FeatureList>
                {features.map((feature, index) => (
                  <FeatureItem key={index}>
                    <Check size={20} color="white" />
                    <Typography sx={{ color: "white", fontSize: "0.875rem" }}>
                      {feature}
                    </Typography>
                  </FeatureItem>
                ))}
              </FeatureList>
              <Button
                variant="contained"
                sx={{
                  mt: "auto",
                  bgcolor: "white",
                  color: "primary.main",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.9)",
                  },
                }}
                fullWidth
              >
                ASSINAR
              </Button>
            </PricingCard>
          </ScrollContainer>
        ) : (
          <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
            <Box sx={{ flex: 1, minWidth: 280 }}>
              <PricingCard sx={{ bgcolor: "#333333" }}>
                <Typography variant="h6" sx={{ color: "white", mb: 2 }}>
                  MENSAL
                </Typography>
                <Typography variant="h3" sx={{ color: "white", mb: 3 }}>
                  R$ 69,90
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ color: "white", ml: 1 }}
                  >
                    /mês
                  </Typography>
                </Typography>
                <FeatureList>
                  {features.map((feature, index) => (
                    <FeatureItem key={index}>
                      <Check size={20} color="white" />
                      <Typography sx={{ color: "white" }}>{feature}</Typography>
                    </FeatureItem>
                  ))}
                </FeatureList>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: "auto" }}
                >
                  ASSINAR
                </Button>
              </PricingCard>
            </Box>

            <Box sx={{ flex: 1, minWidth: 280 }}>
              <PricingCard
                sx={{ bgcolor: (theme) => theme.palette.primary.main }}
              >
                <RecommendedTag>RECOMENDADO</RecommendedTag>
                <Typography variant="h6" sx={{ color: "white", mb: 2 }}>
                  ANUAL
                </Typography>
                <Typography variant="h3" sx={{ color: "white", mb: 3 }}>
                  R$ 997,90
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ color: "white", ml: 1 }}
                  >
                    /ano
                  </Typography>
                </Typography>
                <FeatureList>
                  {features.map((feature, index) => (
                    <FeatureItem key={index}>
                      <Check size={20} color="white" />
                      <Typography sx={{ color: "white" }}>{feature}</Typography>
                    </FeatureItem>
                  ))}
                </FeatureList>
                <Button
                  variant="contained"
                  sx={{
                    mt: "auto",
                    bgcolor: "white",
                    color: "primary.main",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.9)",
                    },
                  }}
                  fullWidth
                >
                  ASSINAR
                </Button>
              </PricingCard>
            </Box>
          </Box>
        )}

        <GuaranteeCard>
          <Box sx={{ maxWidth: { xs: "100%", md: 600 } }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontSize: { xs: "1.75rem", md: "2.5rem" } }}
            >
              Garantia de satisfação
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                fontSize: { xs: "0.875rem", md: "1rem" },
              }}
            >
              Nós estamos tão confiantes no nosso método que oferecemos uma
              garantia incondicional.
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
            >
              7 dias para testar a plataforma.
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
            >
              Se você não gostar, devolvemos 100% do seu investimento.
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              right: { xs: 20, md: 40 },
              bottom: { xs: -20, md: -40 },
              width: { xs: 100, md: 200 },
              height: { xs: 100, md: 200 },
            }}
          >
            <Image
              src="/selo-qualidade.png"
              alt="Selo de Garantia"
              width={200}
              height={200}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        </GuaranteeCard>

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
