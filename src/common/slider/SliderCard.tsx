import { SliderCardProps } from "@/types/slidercard";
import Image from "next/image";

function SliderCards({ item, index }: SliderCardProps) {
  return (
    <div className="slider_card">
      <div className="slider_content">
        <div className="img">
          <Image src={item.img} alt={`Slide ${index}`} />
        </div>
        <div className="title_desc">
          <div className="title">
            <h4>{item.title}</h4>
          </div>
          <div className="description">
            <small>
              <p>{item.description}</p>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderCards;
