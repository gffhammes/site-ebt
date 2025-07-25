export const getLineShadowCss = ({
  lineColor,
  textColor,
  text,
  opacity = 0.2,
  transform = "translate(-3%, -35%)",
  fontSize = 120,
}: IGetLineShadowCssArgs) => {
  return {
    content: `"${text}"`,
    position: "absolute",
    fontSize,
    color: textColor,
    zIndex: -1,
    filter: `opacity(${opacity})`,
    transform,
    textShadow: `-1px -1px 0 ${lineColor}, 1px -1px 0 ${lineColor}, -1px 1px 0 ${lineColor}, 1px 1px 0 ${lineColor}`,
  };
};

interface IGetLineShadowCssArgs {
  lineColor: string;
  textColor: string;
  text: string;
  opacity?: number;
  transform?: string;
  fontSize?: number;
}

export const scrollTo = (id: string, offset?: number) => {
  const target = document.getElementById(id);

  if (!target) return;

  const targetOffsetTop = target.offsetTop;

  const getTopDistance = () => {
    return targetOffsetTop - (offset ?? 0);
  };

  const topDistance = getTopDistance();

  window.scrollTo({
    top: topDistance,
    behavior: "smooth",
  });
};

export type TPeriod = "launch" | "normal";

export const PERIOD: TPeriod = "normal";

export const getYearlyPlanLink = (period: TPeriod): string => {
  const hotmartLink = "https://pay.hotmart.com/H96047264Q";

  const whatsappGroupLink = "https://chat.whatsapp.com/IkVNK7Ej9HZBUovq7Op8Kj";

  switch (period) {
    case "launch":
      return hotmartLink;

    case "normal":
      return whatsappGroupLink;

    default:
      return whatsappGroupLink;
  }
};

export const getYearlyPlanButtonText = (period: TPeriod): string => {
  const launchText = "COMPRAR AGORA";
  const normalText = "ASSINAR"; //"GARANTIR PREÇO ESPECIAL";

  switch (period) {
    case "launch":
      return launchText;

    case "normal":
      return normalText;

    default:
      return normalText;
  }
};

export const getYearlyPlanButtonSubtitle = (period: TPeriod): string => {
  const launchText = `Aproveite o cupom <strong>EBT30</strong>`;
  const normalText = ""; //`Entre na lista de espera e<br/><strong>garanta o preço especial!</strong>`;

  switch (period) {
    case "launch":
      return launchText;

    case "normal":
      return normalText;

    default:
      return normalText;
  }
};

export const hotmartMonthlyLink =
  "https://pay.hotmart.com/B75481811D?off=c1yew7f5&checkoutMode=6&_hi=eyJjaWQiOiIxNzMyMjk4ODI4OTg2MzY2NDkwMDY0MDgwMDYyODAiLCJiaWQiOiIxNzMyMjk4ODI4OTg2MzY2NDkwMDY0MDgwMDYyODAiLCJzaWQiOiJiMmE2M2VlNjFmMjg0ZTA1OGZkYzM5NDEwNTg1ZTA2NSJ9.1744755598266";
