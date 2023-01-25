import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

export default function Experience({ experience }) {
  const { role, company, time, achievements } = experience;

  return (
    <>
      <Row className="d-flex justify-content-center py-4">
        <Col md={7}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">{role}</Card.Title>
              <Card.Text className="text-center">
                {company} {time}
              </Card.Text>
              <ListGroup>
                {achievements.map((item, index) => (
                  <ListGroup.Item key={index}> {item} </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
