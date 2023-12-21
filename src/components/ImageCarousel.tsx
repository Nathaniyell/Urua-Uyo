import Carousel from 'react-bootstrap/Carousel';


function CarouselFadeExample({imageSrc,imageTitle}) {
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