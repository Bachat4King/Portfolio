import { Container, Row, Col } from "react-bootstrap";
import FooterIcon from "./FooterIcon";
import { icons } from "../data/icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bottom d-flex align-items-center justify-content-center w-100">
      <Container fluid className="bg-light text-center py-3">
        <Row>
          <Col>
            {icons.map((icon, index) => (
              <FooterIcon key={index} icon={icon} />
            ))}
            <p>Copyright © Bastian Silva {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
