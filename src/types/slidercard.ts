import { StaticImageData } from "next/image";

export interface SliderCardProps {
  item: {
    img: string | StaticImageData;
    title: string;
    description: string;
  };
  index: number;
}
