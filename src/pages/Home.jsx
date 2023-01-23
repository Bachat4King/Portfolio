import { Container, Card, Row, Col } from "react-bootstrap";
import JumboTron from "../components/JumboTron";
import Image from "react-bootstrap/Image";
import Experience from "../components/Experience";
import About from "../components/About";
import { projects } from "../data/projects";
import Project from "../components/Project";
import { experience } from "../data/experience";

export default function Home() {
  return (
    <>
      <JumboTron />
      <About />
      <Container>
        {experience.map((item) => (
          <Experience key={item.id} experience={item} />
        ))}

        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </Container>
    </>
  );
}
