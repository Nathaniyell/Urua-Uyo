import { Col, Row } from "react-bootstrap";
import "./footer.css";
import { MdFacebook } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import mastercard from '../assets/mastercard.png'
import verve from "../assets/verve.png"
import visa from "../assets/visa.png"


const Footer = () => {
  return (
    <footer
      className="w-100 p-3 p-md-3"
      style={{ backgroundColor: "#552d1ed9" }}
    >
      <Row xs={1} md={3} className="text-white justify-content-between mb-5">
        <Col sm={6} md={3} className=" mw-25">
          <h1
            className="fs-2 text-white mb-3 d-flex"
            
          >
            URUA UYO
            <span className="fs-6" style={{color: "#fff"}}>
              <FaCartShopping />
            </span>
          </h1>
        </Col>

        <Col>
          <form action="" className="my-3 my-md-0">
            <h5 className="text-center mb-3">Get notified of new arrivals</h5>
            <div>
              <input
                className="footer__input mb-2 w-100"
                type="email"
                placeholder="johndoe@email.com"
              />
              <button className="footer-btn w-100" type="submit">
                Submit
              </button>
            </div>
          </form>
        </Col>
        <Col className="my-3 d-flex flex-column justify-content-between my-md-0">
          <h5 className="text-md-center mb-3 text-center">
            Verified Payment Methods
          </h5>
          <div className="d-flex flex-md-row align-items-center">
            {[mastercard, visa, verve].map((icon, index) => {
              return (
                <img
                  src={icon}
                  alt="payment platforms"
                  style={{ width: "25%" }}
                  className="mx-auto"
                  key={index}
                />
              );
            })}
          </div>
        </Col>
      </Row>
      <div
        className="d-flex flex-column flex-md-row align-items-center justify-content-between"
        style={{ marginTop: "5.5rem" }}
      >
        <div className="d-flex justify-content-around align-items-center">
          {[<MdFacebook />, <BsTwitterX />, <FaInstagram />].map(
            (icon, index) => {
              return (
                <button
                  className="mx-4 rounded-circle social__icons"
                  key={index}
                >
                  {icon}
                </button>
              );
            }
          )}
        </div>
        <span className="text-white my-3 my-md-0">
          Copyright &copy; {new Date().getFullYear()}. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
