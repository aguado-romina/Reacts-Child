import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CreateProfile from "../components/CreateProfile";
import MatchesList from "../components/MatchesList";

const Home = () => {
  return (
     
    <Container fluid>
      <Row>
        <Col size="md-6">
          <CreateProfile />
        </Col>
        <Col size="md-6 sm-12">
          <MatchesList />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
