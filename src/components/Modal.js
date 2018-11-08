import React from "react";
import { Modal, Button, Grid, Row, Image, Col } from "react-bootstrap";
import "./Modal.css";

const ModalComponent = () => {
  return (
    <Grid>
      <Row className="show-grid" classID="modal">
        <Col xs={12} md={6} mdOffset={1} className="event" />
        <Col xs={12} md={4} className="info">
          <Row className="show-grid">
            <Col md={10} mdOffset={1} className="event-info">
              <div className="date">
                05 <br /> Nov
              </div>
              <h2>Adobe Creative Jam</h2>
              <p>Creative Meetup</p>

              <p>
                <i class="fas fa-map-marker-alt" /> Bethesda
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  );
};

export default ModalComponent;
