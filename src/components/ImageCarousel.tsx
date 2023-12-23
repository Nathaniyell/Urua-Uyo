import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

type ImageProps = {
  imageSrc1: string;
  imageSrc2: string;
  imageSrc3: string;
  imageTitle1: string;
  imageTitle2: string;
  imageTitle3: string;
};

function ImageCarousel({
  imageSrc1,
  imageSrc2,
  imageSrc3,
  imageTitle1,
  imageTitle2,
  imageTitle3,
}: ImageProps) {
  return (
    <Carousel fade controls={false} pause="hover">
      <Carousel.Item>
        <Image
          height="400px"
          style={{ objectFit: "cover" }}
          src={imageSrc1}
          alt={imageTitle1}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          height="400px"
          style={{ objectFit: "cover" }}
          src={imageSrc2}
          alt={imageTitle2}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          height="400px"
          style={{ objectFit: "cover" }}
          src={imageSrc3}
          alt={imageTitle3}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;
