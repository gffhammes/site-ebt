"use client";
import { useState } from "react";
import {
  Box,
  Typography,
  Modal,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface Modulo {
  titulo: string;
  descricao: string;
  size: "small" | "medium" | "large";
}

const modulos: Modulo[] = [
  {
    titulo: "Teologia Simples",
    descricao:
      "Todo mundo tem uma ideia sobre Deus. Mas será que sabemos de onde vem o que acreditamos? Neste módulo, a gente volta para o começo: o que é teologia? Como a gente pode falar de Deus sem reduzir Ele às nossas ideias? Uma introdução leve e essencial pra quem quer dar os primeiros passos na fé.",
    size: "large",
  },
  {
    titulo: "Quem é Deus?",
    descricao:
      "Quando você pensa em Deus, o que vem à mente? Um velho de barba? Um ser distante? Um juiz? Esse módulo vai direto ao ponto: quem a Bíblia diz que Deus é? Aqui a gente mergulha nos atributos de Deus e descobre como isso muda tudo na nossa forma de crer, viver e se relacionar com Ele.",
    size: "medium",
  },
  {
    titulo: "Espírito Santo",
    descricao:
      "Quem é o Espírito Santo? Uma força misteriosa? Um 'vento' divino? Um fogo consumidor? Esse módulo vai além das imagens: o Espírito é Deus presente e atuante. Aqui você vai entender como Ele age na vida cristã, na igreja e no mundo.",
    size: "medium",
  },
  {
    titulo: "Teologia do Apóstolo Paulo",
    descricao:
      "Paulo escreveu cartas difíceis… mas também transformadoras. Afinal, quem era esse homem que falava tanto de graça, fé e liberdade? Neste módulo, a gente mergulha no pensamento de Paulo: sua teologia, seu contexto e suas lutas.",
    size: "large",
  },
  {
    titulo: "Doutrina e Devoção",
    descricao:
      "Será que conhecer doutrina esfria a fé? Ou será que entender melhor quem Deus é pode aquecer ainda mais a nossa vida com Ele? Esse módulo mostra que doutrina e devoção não são inimigas, são irmãs. Aqui, você vai ver como a boa teologia pode transformar a vida de oração, a leitura da Bíblia e até sua rotina com Deus.",
    size: "medium",
  },
  {
    titulo: "Panorama do Antigo Testamento",
    descricao:
      "Muita gente acha o Antigo Testamento complicado, cheio de nomes difíceis e histórias estranhas. Mas e se a gente te dissesse que ele é, na verdade, o início de uma grande história de amor, justiça e promessa? Neste módulo, você vai descobrir como Gênesis, Êxodo, os profetas e os salmos foram compostos, com suas ênfases e objetivos diferentes.",
    size: "medium",
  },
  {
    titulo: "Panorama do Novo Testamento",
    descricao:
      "Jesus nasceu, morreu e ressuscitou. Mas… e depois? Como os evangelhos, as cartas e o Apocalipse se conectam? Aqui, você vai enxergar o Novo Testamento como uma grande resposta à expectativa criada no Antigo. E o mais importante: vai perceber que essa história continua, e você faz parte dela.",
    size: "medium",
  },
  {
    titulo: "Teologia Bíblica",
    descricao:
      "A Bíblia é uma biblioteca, mas será que ela conta uma história só? Neste módulo, você vai aprender a enxergar a unidade por trás da diversidade: como os livros da Bíblia se conectam, como temas centrais se desenvolvem ao longo da narrativa e como tudo isso nos ajuda a ler as Escrituras com mais profundidade.",
    size: "medium",
  },
  {
    titulo: "Fundamentos da Espiritualidade Cristã",
    descricao:
      "Orar, jejuar, ler a Bíblia… são práticas antigas, mas continuam vivas. Por quê? Porque espiritualidade não é só 'sentir algo de Deus', é viver com Deus. Aqui você vai descobrir como essas disciplinas moldam o coração e ajudam a formar uma fé com raízes.",
    size: "medium",
  },
  {
    titulo: "História da Igreja",
    descricao:
      "Será que a igreja sempre foi como é hoje? Não mesmo! Neste módulo, você vai percorrer os caminhos da fé cristã ao longo dos séculos, perseguições, concílios, reformas, avivamentos. É como olhar no espelho e entender de onde viemos… pra saber melhor quem somos e pra onde vamos.",
    size: "small",
  },
  {
    titulo: "Bibliologia",
    descricao:
      "A Bíblia caiu do céu pronta? Quem escolheu os livros que estão nela? Dá pra confiar? Neste módulo, você vai entender o que é a Bíblia, como ela foi formada, inspirada e por que ela continua sendo autoridade pra fé cristã.",
    size: "medium",
  },
  {
    titulo: "Teologia da Idolatria",
    descricao:
      "Quando a gente pensa em idolatria, imagina estátuas. Mas e se idolatria for muito mais sutil, como colocar qualquer coisa no lugar de Deus? Neste módulo, você vai descobrir como a idolatria pode se esconder até nas boas intenções. E o melhor: como a graça de Deus nos liberta disso e nos devolve o coração inteiro.",
    size: "large",
  },
  {
    titulo: "Cristianismo e Sociedade",
    descricao:
      "A fé é algo só 'do coração'? Ou ela também transforma a forma como vivemos no mundo? Esse módulo mostra como o cristianismo impacta temas como justiça, cultura, economia e política.",
    size: "medium",
  },
  {
    titulo: "Ciência e Fé",
    descricao:
      "Será que a fé e a ciência estão em guerra? Não seria mais justo dizer que elas fazem perguntas diferentes… e podem caminhar juntas? Neste módulo, você vai repensar esse 'conflito' e descobrir que a boa ciência e a boa teologia não são rivais, são aliadas na busca pela verdade.",
    size: "medium",
  },
  {
    titulo: "Hinos Cristológicos",
    descricao:
      "Sabia que alguns dos textos mais profundos sobre Jesus estão em forma de música? Este módulo mergulha em passagens como Filipenses 2 e Colossenses 1, que falam da grandeza de Cristo com poesia e reverência. Um estudo que une teologia, beleza e adoração.",
    size: "medium",
  },
  {
    titulo: "O Novo Testamento e as Mulheres",
    descricao:
      "Será que a Bíblia silencia ou valoriza as mulheres? Este módulo olha de perto os textos do Novo Testamento que falam do papel das mulheres na igreja, na missão e na caminhada com Jesus. Um estudo que confronta estereótipos e abre espaço pra redescobrir a dignidade e o protagonismo feminino no plano de Deus.",
    size: "large",
  },
  {
    titulo: "Os Dez Mandamentos para Hoje",
    descricao:
      "Não matarás. Não adulterarás. Honra teu pai e tua mãe… Mas o que tudo isso tem a ver com a nossa vida hoje? Este módulo mostra que os Dez Mandamentos não são regras frias, mas um caminho de liberdade, amor e sabedoria. Um convite a redescobrir como a ética do Reino começa com um coração moldado por Deus.",
    size: "large",
  },
];

// traduz tamanho em grid spans
const getGridSpan = (size: Modulo["size"]) => {
  switch (size) {
    case "large":
      return { gridColumn: "span 2", gridRow: "span 2" };
    case "medium":
      return { gridColumn: "span 1", gridRow: "span 1" };
    case "small":
      return { gridColumn: "span 1", gridRow: "span 1" };
    default:
      return { gridColumn: "span 1", gridRow: "span 1" };
  }
};

export const ModulosSectionDesktop = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Modulo | null>(null);

  return (
    <Box sx={{ py: 6, px: 4, display: { xs: "none", md: "block" } }}>
      <Typography variant="h3" fontWeight="bold" textAlign="left" mb={4}>
        Módulos
      </Typography>

      {/* GRID estilo da imagem */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 2,
          gridAutoFlow: "dense",
        }}
      >
        {modulos.map((modulo, i) => (
          <Box
            key={i}
            onClick={() => {
              setSelected(modulo);
              setOpen(true);
            }}
            sx={{
              bgcolor: "#E85C0D",
              color: "white",
              borderRadius: 2,
              p: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              cursor: "pointer",
              "&:hover": { bgcolor: "#c94d0a" },
              ...getGridSpan(modulo.size),
            }}
          >
            <Typography fontWeight="500">{modulo.titulo}</Typography>
          </Box>
        ))}
      </Box>

      {/* MODAL */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#E85C0D",
            borderRadius: 3,
            p: 4,
            maxWidth: 600,
            width: "90%",
            color: "white",
          }}
        >
          {/* BOTÃO X */}
          <IconButton
            onClick={() => setOpen(false)}
            sx={{ position: "absolute", top: 8, right: 8, color: "white" }}
          >
            <CloseIcon />
          </IconButton>

          <Typography variant="h5" fontWeight="bold" mb={2} textAlign="center">
            {selected?.titulo}
          </Typography>
          <Box
            sx={{
              bgcolor: "#F97316",
              borderRadius: 2,
              p: 3,
              mb: 3,
            }}
          >
            <Typography>{selected?.descricao}</Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              bgcolor: "white",
              color: "#E85C0D",
              fontWeight: "bold",
              borderRadius: "20px",
              px: 4,
              display: "block",
              mx: "auto",
              "&:hover": { bgcolor: "#f5f5f5" },
            }}
            onClick={() => {
              setOpen(false);
              // rola até a seção de Planos
              const planos = document.getElementById("planos");
              if (planos) planos.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Inscreva-se já!
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};
