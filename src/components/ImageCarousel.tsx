import Carousel from 'react-bootstrap/Carousel';


type ImageProps ={
    imageSrc1: string
    imageSrc2: string
    imageSrc3: string
    imageTitle: string
}

function ImageCarousel({imageSrc,imageTitle}: ImageProps) {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={imageSrc} alt={imageTitle} />
          </Carousel.Item>
      <Carousel.Item>
        
      <img src={imageSrc} alt={imageTitle} />
      </Carousel.Item>
      <Carousel.Item>
        
      <img src={imageSrc} alt={imageTitle} />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;