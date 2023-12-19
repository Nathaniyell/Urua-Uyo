
import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'

const ShoppingCart = () => {
    const {closeCart, cartIsOpen, cartItems} =useShoppingCart()
  return (
    <Offcanvas show={cartIsOpen} onHide={closeCart} placement='end'>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>
Cart
        </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
            {
                cartItems.map(item=>(
                    <CartItem key={item.id} {...item} />
                ))
            }
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ShoppingCart