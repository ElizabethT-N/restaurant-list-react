import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom"
import { Container, Nav, Navbar } from "react-bootstrap";
import HomePage from "./components/HomePage";
import RandomPage from "./components/RandomPage";
import RestaurantPage from "./components/RestaurantPage";
import { TEST_RESTAURANT } from "./components/TEST_RESTAURANT";


function App() {
  const [restaurantList, setRestaurantList] = useState(TEST_RESTAURANT);

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
          <Route path="/" element={<HomePage restaurantList={restaurantList} />} />
          <Route path="/random" element={<RandomPage restaurantList={restaurantList}/>} />
          <Route path="/restaurant/:restaurantId" element={<RestaurantPage />} />
        </Routes>
      </Container>   
    </div>
  )
}

export default App;
