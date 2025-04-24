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

export const hotmartYearlyLink =
  "https://chat.whatsapp.com/IkVNK7Ej9HZBUovq7Op8Kj";
// "https://pay.hotmart.com/H96047264Q?bid=1739196405159&_hi=eyJjaWQiOiIxNzMyMjk4ODI4OTg2MzY2NDkwMDY0MDgwMDYyODAiLCJiaWQiOiIxNzMyMjk4ODI4OTg2MzY2NDkwMDY0MDgwMDYyODAiLCJzaWQiOiJiMmE2M2VlNjFmMjg0ZTA1OGZkYzM5NDEwNTg1ZTA2NSJ9.1744755572530";

export const hotmartMonthlyLink =
  "https://pay.hotmart.com/B75481811D?off=c1yew7f5&checkoutMode=6&_hi=eyJjaWQiOiIxNzMyMjk4ODI4OTg2MzY2NDkwMDY0MDgwMDYyODAiLCJiaWQiOiIxNzMyMjk4ODI4OTg2MzY2NDkwMDY0MDgwMDYyODAiLCJzaWQiOiJiMmE2M2VlNjFmMjg0ZTA1OGZkYzM5NDEwNTg1ZTA2NSJ9.1744755598266";
