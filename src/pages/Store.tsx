import { Col, Row } from "react-bootstrap";
import products from "../data/data";
import { StoreItem } from "../components/StoreItem";
const Store = () => {
  return (
  <>
  <h1>Store</h1>
    <Row md={2} xs={1} lg={3} className="g-3" >
      {
        products.map(product=>{
          return(

            <Col key={product.id}>
              <StoreItem {...product} />

            </Col> 
          )
        })
      }
    </Row>
  </>
  )
};

export default Store;
