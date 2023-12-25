
import { Col, Row } from "react-bootstrap"
import "./footer.css"
import { MdFacebook } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import mastercard from "../assets/mastercard-svgrepo-com.svg"
import verve from "../assets/verve-3-svgrepo-com.svg"
import visa from "../assets/visa-fill-svgrepo-com.svg"


const Footer = () => {
  return (
    <footer className="w-100 p-3 p-md-5" style={{backgroundColor: "#552d1ed9"}}>
    <Row xs={1} md={3} className="text-white mb-5">
 
        <h1 className="fs-2 text-white mb-3 d-inline w-25">URUA UYO</h1>
      
        <Col className="my-3 my-md-0 me-0 me-md-5">
    <h5 className="text-md-center mb-3 text-center">Verified Payment Methods</h5>
    <div className="d-flex flex-row align-items-center justify-content-between">
        {
            [mastercard, visa, verve].map((icon, index)=>{
                return(
                    <img src={icon}
                    alt="payment platforms" style={{width: "60px"}} className="mx-4" key={index} />
                )
            })
        }
    </div>

    </Col>
        <Col>
        <form action="" className="my-3 my-md-0">
            <h5 className="text-center mb-3">Get notified of new arrivals</h5>
            <div>
                <input className="footer__input mb-2 w-md-75 w-100" type="email" placeholder="johndoe@email.com" />
                <button className="footer-btn w-md-75 w-100" type="submit">Submit</button>
            </div>
        </form>
        </Col>
   
    </Row>
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between" style={{marginTop: "5.5rem"}}>
    <div className="d-flex justify-content-around align-items-center">
        {[<MdFacebook />, <BsTwitterX />, <FaInstagram />].map((icon, index)=>{
            return(
                <button className="mx-4 rounded-circle social__icons" key={index}>{icon}</button>
            )
        })}
        
    </div>
    <span className="text-white my-3 my-md-0">Copyright &copy; {new Date().getFullYear()}. All rights reserved</span>
    </div>
    
    </footer>
  )
}

export default Footer