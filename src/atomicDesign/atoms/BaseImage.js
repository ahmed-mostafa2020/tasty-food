import Image from "next/image";
import baseImage from "../../../public/assets/images/Burger-base.png";

const BaseImage = ({ width, height }) => {
  return (
    <Image
      src={baseImage}
      alt="baseImage"
      width={width}
      height={height}
      style={{ position: "absolute", zIndex: -1 }}
    />
  );
};

export default BaseImage;
