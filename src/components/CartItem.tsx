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
    <img src={item.image} style={{width: "150px", height: "80px", objectFit: "contain"}} />
    <div className="me-auto">
        <div>
            {item.title} {quantity>1 && <span className="muted" style={{fontSize: ".65rem"}}>x{quantity}</span>}
        </div>
        <div className="muted" style={{fontSize: ".7rem"}}>{formatCurrency(item.price)}</div>
    </div>
    <div>{formatCurrency(item.price * quantity)}</div>
    <Button variant="danger" onClick={()=>removeFromCart(item.id)} size="sm" className="ms-2">&times;</Button>
  </Stack>
  )
}

export default CartItem