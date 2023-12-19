import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { useProductContext } from "../data/data"
import { formatCurrency } from "../utilities/formatCurrency"


type CartItemProps={
id: number
quantity:number
}

const CartItem = ({id, quantity}:CartItemProps ) => {
const {removeFromCart, increaseCartQuantity, decreaseCartQuantity} = useShoppingCart()
const { products } = useProductContext()
const item = products.find(product=>product.id === id)
if(item == null)return null

  return (
  <Stack direction="horizontal" className="flex align-items-center">
    <img src={item.image} style={{width: "125px", height: "75px", objectFit: "contain"}} />
    <div className="me-auto">
        <div>
           <span style={{fontSize: "14px"}}> {item.title} </span>{quantity>1 && <span className="muted" style={{fontSize: ".65rem", fontWeight: "bold"}}>x{quantity}</span>}
        </div>
        <div className="muted mb-4" style={{fontSize: ".75rem"}}>{formatCurrency(item.price)}</div>
        <Stack direction="horizontal" gap={4}>
            <Button onClick={()=>decreaseCartQuantity(item.id)} size="sm" variant="outline-danger">-</Button>
            <Button onClick={()=>increaseCartQuantity(item.id)} size="sm" variant="outline-success">+</Button>
        </Stack>
    </div>
    <div>{formatCurrency(item.price * quantity)}</div>
    <Button variant="danger" onClick={()=>removeFromCart(item.id)} size="sm" className="ms-2">&times;</Button>
  </Stack>
  )
}

export default CartItem