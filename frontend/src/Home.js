/** @format */

import AppNavbar from "./components/AppNavBar";
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <AppNavbar />
      <Container fluid>
        <Button color="link">
          <Link to="/inventory">Inventory</Link>
        </Button>
      </Container>
    </div>
  );
};

export default Home;
