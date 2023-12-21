import Carousel from 'react-bootstrap/Carousel';


type ImageProps ={
    imageSrc: String
    imageTitle: String
}

function CarouselFadeExample({imageSrc,imageTitle}: ImageProps) {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={imageSrc} alt={imageTitle} />
    
      </Carousel.Item>
      <Carousel.Item>
        
    
      </Carousel.Item>
      <Carousel.Item>
        
       
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;