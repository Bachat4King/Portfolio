import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { aboutMe } from "../data/about";

export default function () {
  return (
    <>
      <Row className="d-flex justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">About Me</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>{aboutMe}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
