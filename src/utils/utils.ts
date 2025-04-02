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
