import ImageCarousel from "../components/ImageCarousel"
import { useProductContext } from "../data/data"

const Home = () => {
  const { products } = useProductContext();
  const [firstProduct, secondProduct, thirdProduct] = products.slice(0, 3);
  
  const { title: title1, image: image1 } = firstProduct || {};
  const { title: title2, image: image2 } = secondProduct || {};
  const { title: title3, image: image3 } = thirdProduct || {};
  
  
  return (
    <div className="d-flex align-items-center justify-content-between container">
    <div>
      <h1>Discover our latest collection</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aspernatur, voluptates excepturi quae perspiciatis deserunt! Quod corporis impedit aperiam ad ducimus recusandae assumenda, illo libero tempora quaerat sint quos provident? Asperiores sequi sit quis impedit nemo, beatae itaque nobis assumenda mollitia accusantium debitis tenetur rerum ullam veniam.</p>
    </div>
    <ImageCarousel 
    imageTitle1={title1}
    imageTitle2={title2}
    imageTitle3={title3}
    imageSrc1={image1}
    imageSrc2={image2}
    imageSrc3={image3}
     />
    </div>
  )
}

export default Home