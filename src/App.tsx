import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Store from "./pages/Store"
import { Container } from "react-bootstrap"

const App = () => {
  return (

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
    </Routes>
    // <Container>HI</Container>
  )
}

export default App