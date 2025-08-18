import { StaticImageData } from "next/image";

export interface SliderBoxProps {
  data: Array<{
    img: string | StaticImageData;
    title: string;
  }>;
}

export interface SliderCardProps {
  item: {
    img: string | StaticImageData;
    title: string;
  };
  index: number;
}
