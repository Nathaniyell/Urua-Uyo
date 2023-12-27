
import { Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import {motion} from "framer-motion"

type StoreItemProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export const StoreItem = ({ id, title, price, image }: StoreItemProps) => {
const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
const quantity = getItemQuantity(id)
  return (
    <motion.div
    initial={{y: 100, opacity: 0}}
                    whileInView={{opacity: 1, y:0}}
                    transition={{duration:.8, delay: 0.5}}
                    viewport={{once: true}}
    >
    <Card key={id} className="h-100 border-0 shadow-sm">
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
            <Button className=" w-100" onClick={()=>increaseCartQuantity(id)}>Add to Cart</Button>
          ) : (
            <div className="d-flex align-items-center flex-column" style={{gap: "2rem"}}>
                <div className="d-flex justify-content-between align-items-center" style={{gap: "2rem"}}>
                    <Button size="sm" onClick={()=>decreaseCartQuantity(id)}>-</Button>
                    <div>
                        <span className="fs-5">{quantity}</span> in cart
                    </div>
                    <Button size="sm" onClick={()=>increaseCartQuantity(id)}>+</Button>
                </div>
                <Button variant="danger" size="sm" onClick={()=>removeFromCart(id)}>Remove</Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
    </motion.div>
  );
};
