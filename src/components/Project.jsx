import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import ListGroup from "react-bootstrap/ListGroup";

export default function Project({ project }) {
  const { name, repoLink, achievements, tools } = project;

  return (
    <>
      <Row className="d-flex justify-content-center py-1">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                <p>{name}</p>
                <a href={repoLink} target="_blank" rel="noopener noreferrer">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="GitHub"
                    width="30"
                    height="30"
                  />
                </a>
              </Card.Title>
              <Card.Text>
                <ListGroup numbered>
                  {achievements.map((item) => (
                    <ListGroup.Item as="li"> {item}</ListGroup.Item>
                  ))}
                  <strong>Tools used:</strong> {tools}
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
