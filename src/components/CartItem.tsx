import { useShoppingCart } from "../context/ShoppingCartContext"
import { useProductContext } from "../data/data"


type CartItemProps={
id: number
quantity:number
}

const CartItem = ({id, quantity}:CartItemProps ) => {
const {removeFromCart, increaseCartQuantity, decreaseCartQuantity} = useShoppingCart()
const { products } = useProductContext()

  return (
    <div>CartItem</div>
  )
}

export default CartItem