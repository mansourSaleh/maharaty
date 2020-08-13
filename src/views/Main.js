import React from "react";
import LeftCarousel from "../components/LeftCarousel";
import { Container, Row, Col } from "react-bootstrap";

function Main() {
  return (
    <Container fluid style={{marginTop: "7rem"}} >
      <Row className="ml-5 mr-5">
        <Col >
          <LeftCarousel />
        </Col>
        <Col>
          <h1>FFFFFFF</h1>
          <h1>lkdsfjlsakf</h1>
          <h1>lkdsfjlsakf</h1>
          <h1>lkdsfjlsakf</h1>
          <h1>lkdsfjlsakf</h1>
          <h1>lkdsfjlsakf</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
