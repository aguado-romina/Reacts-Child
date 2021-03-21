import React from "react";
import { Col, Row, Container } from "../components/Grid";


const NoMatch = () => {
  return (

    <div className="max-w-auto container bg-white px-8 mx-auto rounded-lg">
      
    
    <Container fluid>
      <Row>
        <Col size="md-12">
        
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default NoMatch;
