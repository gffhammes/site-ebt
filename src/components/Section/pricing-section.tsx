"use client";

import { Box, Container, Typography, Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Check } from "lucide-react";
import Image from "next/image";

const PricingCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
}));

const FeatureList = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: "24px 0",
  flex: 1,
});

const FeatureItem = styled("li")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
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
  padding: theme.spacing(4),
  color: "white",
  position: "relative",
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(4),
}));

export const PricingSection = () => {
  return (
    <Box sx={{ py: 8, bgcolor: "#1A1A1A" }}>
      <Container>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{ color: "white", mb: 6, fontWeight: 700 }}
        >
          Planos
        </Typography>

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
                  sx={{ color: "white" }}
                >
                  /mês
                </Typography>
              </Typography>
              <FeatureList>
                {[
                  "Todos os cursos disponíveis e ilimitados",
                  "Materiais complementares",
                  "Avaliações periódicas",
                  "Acesso online e offline",
                  "Sorteios quinzenais de livros",
                  "Orientações Teológicas",
                  "Grupo exclusivo no WhatsApp",
                  "Tutor Teológico",
                ].map((feature, index) => (
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
                  sx={{ color: "white" }}
                >
                  /ano
                </Typography>
              </Typography>
              <FeatureList>
                {[
                  "Todos os cursos disponíveis e ilimitados",
                  "Materiais complementares",
                  "Avaliações periódicas",
                  "Acesso online e offline",
                  "Sorteios quinzenais de livros",
                  "Orientações Teológicas",
                  "Grupo exclusivo no WhatsApp",
                  "Tutor Teológico",
                ].map((feature, index) => (
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

        <GuaranteeCard>
          <Box sx={{ maxWidth: 600 }}>
            <Typography variant="h3" gutterBottom>
              Garantia de satisfação
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Nós estamos tão confiantes no nosso método que oferecemos uma
              garantia incondicional.
            </Typography>
            <Typography variant="h5" gutterBottom>
              7 dias para testar a plataforma.
            </Typography>
            <Typography variant="body1">
              Se você não gostar, devolvemos 100% do seu investimento.
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              right: 40,
              bottom: -40,
              width: 200,
              height: 200,
            }}
          >
            <Image
              src="/selo-qualidade.png"
              alt="Selo de Garantia"
              width={200}
              height={200}
            />
          </Box>
        </GuaranteeCard>

        <Box sx={{ color: "white", mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Acesso imediato:
          </Typography>
          <Typography variant="body1" gutterBottom>
            Seu login e senha serão enviados ao seu e-mail logo após o
            processamento do pagamento.
          </Typography>
          <Typography variant="body2" color="gray">
            Se não recebeu, dá uma olhadinha na sua caixa de SPAM, por favor!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
