import { MobileFaqSection } from "./MobileFaqSection";

export interface IFaqSectionProps {}

export const FaqSection = (props: IFaqSectionProps) => {
  return <MobileFaqSection />;
};

export const FAQData: IFAQItem[] = [
  {
    question: "SOBRE A EBT",
    answer: `O que é a EBT?
    A EBT é uma escola online com cursos livres de teologia, feitos para iniciantes — líderes ou
    membros. O conteúdo é bíblico, acessível e com linguagem clara.
    Preciso ser pastor ou ter formação teológica para participar?
    Não. A EBT é para qualquer pessoa interessada em aprender teologia de forma simples e
    profunda.
    A EBT é ligada a alguma denominação?
    Não. Nosso conteúdo é cristão, evangélico e interdenominacional.`,
  },
  {
    question: "CONTEÚDO E FUNCIONAMENTO",
    answer: ` O que está incluído no curso?
    Mais de 130 horas de aulas divididas por temas como Teologia Simples, Panorama do AT e NT,
    Doutrina, Bibliologia, Espiritualidade Cristã, entre outros.
    As aulas são ao vivo ou gravadas?
    São todas gravadas. Você estuda no seu ritmo, quando e onde quiser.
Por quanto tempo terei acesso ao curso?
    • Plano mensal: acesso enquanto a assinatura estiver ativa. • Plano anual: acesso por 12 meses. n
    Importante: o plano anual não é vitalício. Após os 12 meses, é necessário renovar para continuar
    acessando.
Tem plano vitalício?
    Não. Os planos disponíveis são mensal e anual, ambos com acesso limitado ao tempo contratado.`,
  },
  {
    question: "PLANOS E VALORES",
    answer:
    `Quais são os planos disponíveis?
     • Mensal: R$69,90/mês, renovação automática, sem fidelidade.
     • Anual: R$997 à vista (ou parcelado com juros no cartão), com 12 meses de acesso.
O que está incluído no plano anual?
Além do conteúdo completo, você tem: • Encontros ao vivo quinzenais • Grupo com professor
para dúvidas • Certificado digital • Sorteios exclusivos • Avaliações para acompanhar seu
progresso`,
     
  },
  {
    question: "CERTIFICADO",
    answer:
    ` O curso oferece certificado?
    Sim, mas o certificado digital está disponível exclusivamente para alunos do plano anual. Ele é
    emitido ao final do curso e informa a carga horária estudada.
O certificado é reconhecido pelo MEC?
    Não. A EBT é um curso livre, sem vínculo com o MEC. O certificado comprova a carga horária
    estudada e o desenvolvimento pessoal.`,
  },
  {
    question: "ACESSO E SUPORTE",
    answer:
       `Como acesso as aulas depois da compra?
        Você recebe um e-mail com os dados de acesso e entra na plataforma da EBT. Pode assistir no
        navegador ou no aplicativo (se disponível).
Posso estudar pelo celular?
        Sim. As aulas são compatíveis com celular, tablet e computador.
        Tive problemas com acesso. Como falo com o suporte?
        Você pode nos chamar pelo WhatsApp +55 47 98895-8800 ou e-mail contato@bibotalk.com 
       que ajudamos você rapidamente.`,
  },
  {
    question: "CONTEÚDO DETALHADO (EM BREVE NA EMENTA DO SITE)",
    answer:
      `Onde vejo os módulos e temas detalhados?
Você pode consultar a ementa completa no site da EBT. Se quiser, te envio o link direto.`,
  },
  
];

export interface IFAQItem {
  question: string;
  answer: string;
}
