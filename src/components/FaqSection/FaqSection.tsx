import { MobileFaqSection } from "./MobileFaqSection";

export interface IFaqSectionProps {}

export const FaqSection = (props: IFaqSectionProps) => {
  return <MobileFaqSection />;
};

export const FAQData: IFAQItem[] = [
  {
    question: "Qual é a confessionalidade da Escola Bibotalk de Teologia?",
    answer: `Não somos calvinistas, nem arminianos. Também não somos pentecostais, nem luteranos. Então, o que somos? SOMOS EVANGÉLICOS!

A equipe da EBT é composta por uma ampla variedade de tradições cristãs. Isso significa que somos plurais, o que considero muito positivo. Dentro da nossa história, abraçamos diversas correntes teológicas saudáveis, incluindo pentecostais, carismáticos, luteranos, arminianos e reformados em nossa equipe. Essa diversidade legítima é a beleza do nosso trabalho.

Lutamos pela unidade da igreja e defendemos o que é comum, sempre respeitando as diversidades dentro das tradições cristãs. Não estamos vinculados a nenhuma confissão de fé denominacional específica. Nosso compromisso confessional é com o Credo Apostólico.

Obviamente, ser plural não implica em desordem ou falta de direcionamento. Temos uma rica tradição que nos guia e nos baseamos no solo comum do cristianismo.`,
  },
  {
    question: "Como irei acessar a área de membros e o grupo?",
    answer: `Após a confirmação da sua matrícula você receberá o link de acesso a área de membros no seu e-mail e em até 12h você receberá o Email para fazer parte do nosso grupo no Telegram`,
  },
  {
    question: "Posso acessar de qualquer lugar?",
    answer:
      "Sim. Basta ter uma conexão com internet o acesso pode ser feito por celular, tablet e computador",
  },
  {
    question: "Posso assistir as aulas a qualquer momento?",
    answer:
      "As aulas estão gravadas e você poderá assistir quando quiser. As lives complementares serão avisadas no grupo do Telegram, mas caso você não consiga participar, elas ficarão gravadas pra sempre na área de membros. Quem faz seu horário é você!",
  },
  {
    question: "Quanto tempo terei acesso a plataforma?",
    answer:
      "Você terá acesso a área de membros e ao grupo do Telegram por um ano, e será renovada automaticamente após o final do período.",
  },
  {
    question: "A quantos cursos eu terei acesso?",
    answer:
      "Você terá acesso a todos os cursos que já estão gravados e a todos que estão em gravação. Nosso cronograma de entrega é de 1 novo curso a cada 3 meses.",
  },
  {
    question: "E se eu comprar e quiser cancelar?",
    answer:
      "Você tem 7 dias para pedir o reembolso e será devolvido 100% do seu investimento",
  },
];

export interface IFAQItem {
  question: string;
  answer: string;
}
