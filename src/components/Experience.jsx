import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

export default function Experience({ experience }) {
  const { role, company, time, achievements } = experience;

  return (
    <>
      <Row className="d-flex justify-content-center py-4">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">{role}</Card.Title>
              <Card.Text>
                <p className="text-center">
                  {company} {time}
                </p>
                <ListGroup>
                  {achievements.map((item) => (
                    <ListGroup.Item> {item} </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
