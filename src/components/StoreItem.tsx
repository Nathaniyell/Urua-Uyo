import { Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { Button } from "react-bootstrap";

type StoreItemProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export const StoreItem = ({ id, title, price, image }: StoreItemProps) => {
  const quantity = 0;
  return (
    <Card key={id} className="h-100">
      <Card.Img
        variant="top"
        src={image}
        height="300px"
        style={{ objectFit: "contain" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline my-4">
          <span className="fs-5">{title}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>

        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className=" w-100">Add to Cart</Button>
          ) : (
            <div className="d-flex align-items-center flex-column" style={{gap: ".5rem"}}>
                <div className="d-flex justify-content-between align-items-center" style={{gap: ".5rem"}}>
                    <Button>-</Button>
                    <div>
                        <span className="fs-4">{quantity}</span> in cart
                    </div>
                    <Button>+</Button>
                </div>
                <Button variant="danger">Remover</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
