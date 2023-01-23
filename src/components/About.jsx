import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export default function () {
  return (
    <>
      <Row className="d-flex justify-content-center">
        <Col md={5}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">About Me</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                I'm a Test Automation Engineer with experience in automated UI
                testing with Selenium using Java and Python, API testing with
                Postman, Rest Assured, Requests, and Axios. I also have
                knowledge of Django, JavaScript, TypeScript, SQL, NoSQL, Docker,
                Jenkins, and GIT. I am always willing to learn new technologies,
                contribute knowledge, and accept challenges with interest and
                enthusiasm.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
