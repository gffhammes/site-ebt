export const getLineShadowCss = ({
  lineColor,
  textColor,
  text,
  opacity = 0.2,
  transform = "translate(-3%, -35%)",
}: IGetLineShadowCssArgs) => {
  return {
    content: `"${text}"`,
    position: "absolute",
    fontSize: 120,
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
}
