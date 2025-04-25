import { Routes, Route, Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import HomePage from "./pages/HomePage";
import RandomPage from "./pages/RandomPage";
import RestaurantPage from "./pages/RestaurantPage";

function App() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">My Restaurants</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/random">Random</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/random" element={<RandomPage />} />
          <Route path="/restaurant/:restaurantId" element={<RestaurantPage />} />
        </Routes>
      </Container>   
    </div>
  );
}

export default App;

