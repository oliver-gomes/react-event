import React from "react";
import { Modal, Button, Grid, Row, Image, Col } from "react-bootstrap";
import "./Modal.css";

const ModalComponent = () => {
  return (
    <Grid>
      <Row className="show-grid">
        <Col xs={12} md={6} mdOffset={1} className="event" />
        <Col xs={12} md={4} className="info">
          asd
        </Col>
      </Row>
    </Grid>
  );
};

export default ModalComponent;
