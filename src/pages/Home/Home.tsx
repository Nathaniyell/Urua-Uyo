import { Col, Row, Spinner } from "react-bootstrap";
import ImageCarousel from "../../components/ImageCarousel";
import { useProductContext } from "../../data/data";
import { LinkContainer } from "react-router-bootstrap";
import "./home.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Function to update online status
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    // Add event listeners for online and offline events
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, [navigator.onLine]);

  // console.log(isOnline);

  const { products } = useProductContext();
  const [firstProduct, secondProduct, thirdProduct] = products.slice(0, 3);

  const { title: title1, image: image1 } = firstProduct || {};
  const { title: title2, image: image2 } = secondProduct || {};
  const { title: title3, image: image3 } = thirdProduct || {};

  return (
    <div className="home__body">
      <Row md={2} xs={1} className="g-4 Home__Grid">
        <Col className="mr-md-5" md={{ order: "first" }} xs={{ order: "last" }}>
          <h1>Discover our latest collection</h1>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At nulla
            dicta nesciunt ullam ex reiciendis velit hic cum quas rerum tempore
            veniam, possimus repudiandae exercitationem, excepturi pariatur ad
            quisquam illo porro modi consectetur! Numquam odio modi eos, debitis
            vitae ratione nemo quo sit rem id! Doloribus consequatur modi
            obcaecati optio dolore deleniti officiis, magnam aut, dignissimos
            earum neque suscipit, non ab repudiandae ipsum veritatis nostrum a
            at facere nisi. Nulla explicabo ullam consectetur! Animi, natus!
          </p>
          <LinkContainer to="/store">
            <button className="p-3  fw-bold rounded Home__btn">
              Discover More
            </button>
          </LinkContainer>
        </Col>
        <div className="carousel__div">
          <Col md={{ order: "last" }} xs={{ order: "first" }}>
            {!isOnline && (
              <p className="text-danger text-center fs-5">
                Please check your internet connectivity
              </p>
            )}
            {products.length === 0 ? (
              <div className="text-center">
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              <ImageCarousel
                imageTitle1={title1}
                imageTitle2={title2}
                imageTitle3={title3}
                imageSrc1={image1}
                imageSrc2={image2}
                imageSrc3={image3}
              />
            )}
          </Col>
        </div>
      </Row>
    </div>
  );
};

export default Home;
