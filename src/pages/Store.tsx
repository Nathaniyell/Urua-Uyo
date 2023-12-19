import { Col, Row } from "react-bootstrap";
import { useProductContext } from "../data/data";
import { StoreItem } from "../components/StoreItem";

const Store = () => {
  const { products } = useProductContext();
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {products.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          products?.map((product) => {
            return (
              <Col key={product.id}>
                <StoreItem {...product} />
              </Col>
            );
          })
        )}
      </Row>
    </>
  );
};

export default Store;
