import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <Container fluid className="bg-light text-center py-3">
      <Row>
        <Col>
          <p>Copyright © Bastian Silva 2023</p>
        </Col>
      </Row>
    </Container>
  );
}