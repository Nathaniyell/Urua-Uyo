import { Col, Row } from "react-bootstrap";
import products from "../data/data";
const Store = () => {
  return (
  <>
  <h1>Store</h1>
    <Row >
      {
        products.map(product=>{
          const {id, image,title,price} = product
          return(

            <Col></Col> 
          )
        })
      }
    </Row>
  </>
  )
};

export default Store;
