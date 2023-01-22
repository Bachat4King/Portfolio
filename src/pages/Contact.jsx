import { Form, Button, Container, Col } from "react-bootstrap";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // add your form submission logic here
    console.log("Form Submitted");
  };

  return (
    <Container>
      <Col md={{ span: 6, offset: 3 }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Subject" />
          </Form.Group>

          <Form.Group controlId="formBasicTextarea">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Your message here" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Container>
  );
}
