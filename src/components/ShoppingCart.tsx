
import { Offcanvas } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'

const ShoppingCart = () => {
    const {closeCart, cartIsOpen} =useShoppingCart()
  return (
    <Offcanvas show={cartIsOpen} onHide={closeCart} placement='end'>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>
Cart
        </Offcanvas.Title>
        </Offcanvas.Header>
    </Offcanvas>
  )
}

export default ShoppingCart