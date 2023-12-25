import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import Store from "./pages/Store/Store";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { ProductProvider } from "./data/data";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ProductProvider>
      <ShoppingCartProvider>
        <Navbar />
        <Container
          className="mb-4 bg-light pb-3"
          style={{ paddingTop: "100px" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/store" element={<Store />} />
          </Routes>
        </Container>

        <Footer />
      </ShoppingCartProvider>
    </ProductProvider>
  );
};

export default App;
