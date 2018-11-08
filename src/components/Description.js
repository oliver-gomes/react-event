import React from "react";
import { Button, Grid, Row, ButtonToolbar, Col } from "react-bootstrap";
import "./Description.css";

const Description = () => {
  return (
    <Grid className="description">
      <Row>
        <Col md={6} mdOffset={5}>
          <p className="title">Description</p>
        </Col>
      </Row>

      <Row>
        <Col md={8} mdOffset={2}>
          <p className="details">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </Col>
      </Row>

      <Row className="description">
        <Col md={6} mdOffset={5}>
          <p className="title">Date & Location</p>
        </Col>
      </Row>

      <Row>
        <Col md={8} mdOffset={2}>
          <p className="details">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </Col>
      </Row>
    </Grid>
  );
};

export default Description;
