import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { ProductProvider } from "./data/data";

const App = () => {
  return (
    <ProductProvider>
    <ShoppingCartProvider>
    <Navbar />
    <Container className="mb-4 bg-light">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </Container>
    </ShoppingCartProvider>
    </ProductProvider>
  );
};

export default App;
