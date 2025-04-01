import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { ReviewCard } from "./ReviewCard";

export interface IDesktopReviewsSectionProps {}

export const DesktopReviewsSection = (props: IDesktopReviewsSectionProps) => {
  return (
    <Box>
      <Container>
        <Stack gap={4} alignItems="flex-start">
          <Typography variant="h2">Depoimentos</Typography>

          <Stack direction="row" gap={4}>
            {reviews.slice(0, 3).map((review, index) => (
              <Box key={review.name} sx={{ flex: "1 1 100%" }}>
                <ReviewCard data={review} />
              </Box>
            ))}
          </Stack>

          <Button variant="contained">Ver planos</Button>
        </Stack>
      </Container>
    </Box>
  );
};

export interface IReviewData {
  name: string;
  stars: number;
  text: string;
}

export const reviews: IReviewData[] = [
  {
    name: "Jéssica",
    stars: 5,
    text: "Jeito simples e fácil de aprender teologia.",
  },
  {
    name: "Rafael Silas",
    stars: 5,
    text: `Acompanho o Bibotalk a algum tempo e os podcasts sempre me ajudaram na caminhada cristã. Hoje com o curso Teologia Simples tive mais certeza de alguns pontos teológicos que eu já cria e tem me ajudado muito com o que ainda não entendo. Super recomendo pra quem já sabe um pouco ou que quer começar nessa maravilhosa caminhada de conhecimento.`,
  },
  {
    name: "Anderson",
    stars: 5,
    text: `A EBT é excelente e todos os seus professores muito didáticos com aulas muito instigadoras e inspiradoras. O conhecimento adquirido é integrado com a pratica na comunidade cristã e uso no dia a dia diante dos desafios contemporâneos. A escola serve para iniciantes para terem contato com os principais temas da fé e também para quem já tem algum conhecimento e tem acesso as ideias de professores cheios de conhecimento e com experiência pastoral e que lidam com os problemas comuns na vida da igreja.`,
  },
];
