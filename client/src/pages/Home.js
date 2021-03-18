import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CreateProfileForm from "../components/CreateProfileForm";
import MatchesList from "../components/MatchesList";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <CreateProfileForm />
        </Col>
        <Col size="md-6 sm-12">
          <MatchesList />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
