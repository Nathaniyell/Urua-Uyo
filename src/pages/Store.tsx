import { Col, Row, Spinner, Stack } from "react-bootstrap";
import { useProductContext } from "../data/data";
import { StoreItem } from "../components/StoreItem";

const Store = () => {
  const { products } = useProductContext();
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {products.length === 0 ? (
          <div style={{height: "80vh", width:"100%", display:"grid", placeItems: "center"}}>

            <Stack direction="horizontal" gap={2} >Loading <Spinner animation="border"  /></Stack>
          </div>
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
