import { Button, Col, Row, Spinner, Stack } from "react-bootstrap";
import ImageCarousel from "../../components/ImageCarousel"
import { useProductContext } from "../../data/data"
import { LinkContainer } from "react-router-bootstrap";


const Home = () => {
  const { products } = useProductContext();
  const [firstProduct, secondProduct, thirdProduct] = products.slice(0, 3);
  
  const { title: title1, image: image1 } = firstProduct || {};
  const { title: title2, image: image2 } = secondProduct || {};
  const { title: title3, image: image3 } = thirdProduct || {};
  
  
  return (
    <Row md={2} xs={1} className="g-3">
    <Col>
      <h1>Discover our latest collection</h1>
      <p style={{textAlign: "justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nulla dicta nesciunt ullam ex reiciendis velit hic cum quas rerum tempore veniam, possimus repudiandae exercitationem, excepturi pariatur ad quisquam illo porro modi consectetur! Numquam odio modi eos, debitis vitae ratione nemo quo sit rem id! Doloribus consequatur modi obcaecati optio dolore deleniti officiis, magnam aut, dignissimos earum neque suscipit, non ab repudiandae ipsum veritatis nostrum a at facere nisi. Nulla explicabo ullam consectetur! Animi, natus!</p>
      <LinkContainer to="/store">
  <Button variant="outline-primary">Discover More</Button>
</LinkContainer>
    </Col>
    <Col xs={{order: "first"}}>
    {products.length === 0 ? (
          <div style={{display:"grid", placeItems: "center"}}>

            <Stack direction="horizontal" gap={3} ><span className="fs-1">Loading</span> <Spinner animation="border" variant="primary"  /></Stack>
          </div>
        ):(
<ImageCarousel 
    imageTitle1={title1}
    imageTitle2={title2}
    imageTitle3={title3}
    imageSrc1={image1}
    imageSrc2={image2}
    imageSrc3={image3}
     />
        )}
    
     </Col>
    </Row>
  )
}

export default Home