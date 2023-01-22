import { Container, Card, Row, Col } from "react-bootstrap";
import JumboTron from "../components/JumboTron";

export default function Home() {
  return (
    <>
      
      <JumboTron/>

      <Container>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>About Me</Card.Title>
                <Card.Text>
                  I'm a Test Automation Engineer with experience in automated UI
                  testing with Selenium using Java and Python, API testing with
                  Postman, Rest Assured, Requests, and Axios. I also have
                  knowledge of Django, JavaScript, TypeScript, SQL, NoSQL,
                  Docker, Jenkins, and GIT. I am always willing to learn new
                  technologies, contribute knowledge, and accept challenges with
                  interest and enthusiasm.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card>
              <Card.Body>
                <Card.Title>Main Skills</Card.Title>
                <Card.Text>
                    <li>Python</li>
                    <li>Java</li>
                    <li>Selenium</li>
                    <li>Playwright</li>
                    <li>Jenkins</li>
                    <li>Postman</li>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row>

        </Row>
      </Container>
    </>
  );
}
