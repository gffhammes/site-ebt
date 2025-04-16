import Image from "next/image";
import logo from "../../../public/logo-ebt.svg";

export interface IEBTLogoProps {
  height: number;
}

const logoAspectRatio = logo.height / logo.width;

export const EBTLogo = ({ height }: IEBTLogoProps) => {
  return (
    <Image
      src={logo.src}
      height={height}
      width={height / logoAspectRatio}
      alt="EBT"
      quality={100}
      unoptimized
    />
  );
};
