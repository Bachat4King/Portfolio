import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

export default function Footer() {

  const currentYear = new Date().getFullYear()

  return (
    <footer className="fixed-bottom d-flex align-items-center justify-content-center w-100">
      <Container fluid className="bg-light text-center py-3">
        <Row>
          <Col>
            <a href="https://www.linkedin.com/in/bastian-silva/" target="_blank" rel="noopener noreferrer">
              <Image src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="mr-3" width="30" height="30" />
            </a>
            <span className="mx-3"></span>
            <a href="https://github.com/Bachat4King" target="_blank" rel="noopener noreferrer">
              <Image src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" width="30" height="30" />
            </a>
            <p>Copyright © Bastian Silva {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}