
import { Col, Row } from "react-bootstrap"
import "./footer.css"
import { MdFacebook } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-100 p-1 p-md-5" style={{backgroundColor: "#552d1ed9"}}>
    <Row xs={2} md={3} className="text-white mb-5">
    <Col>
        <h1 className="fs-2 text-white">URUA UYO</h1>
        </Col>
        <Col>
        <form action="">
            <h5>Get notified of new arrivals</h5>
            <div>
                <input className="footer__input mb-2 w-75" type="email" placeholder="johndoe@email.com" />
                <button className="footer-btn w-75" type="submit">Submit</button>
            </div>
        </form>
        </Col>
    <Col>
    <h5>Verified Payment Methods</h5>
    </Col>
    </Row>
    <div className="d-flex flex-wrap w-50 justify-content-around align-items-center mx-auto">
        {[<MdFacebook />, <BsTwitterX />, <FaInstagram />].map((icon, index)=>{
            return(
                <button className="rounded-circle social__icons" key={index}>{icon}</button>
            )
        })}
        
    </div>
    </div>
  )
}

export default Footer