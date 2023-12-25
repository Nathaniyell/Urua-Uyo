import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { useShoppingCart } from "../context/ShoppingCartContext";
const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <NavbarBs sticky="top">
      <Container className="bg-white shadow-sm mb-3 py-2">
        <NavbarBs.Brand style={{color: "#3a1203d9", display: "flex"}} className="fs-2 relative" to={"/"} as={NavLink}>
          URUA 
          
          UYO
          <span
            className="fs-6"
                     >
           <FaCartShopping />
          </span>
        </NavbarBs.Brand>
        <Nav fill variant="underline" className="mx-auto">
          <Nav.Link to={"/"} as={NavLink} >
            Home
          </Nav.Link>
          <Nav.Link to={"/store"} as={NavLink} >
            Store
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={() => openCart()}
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
          >
            <BsCart2 />
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "#fff",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                right: 0,
                top: 0,
                transform: "translate(25% 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
