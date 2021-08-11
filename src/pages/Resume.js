import styled from "styled-components";
import SelfInfo from "pages/resume/SelfInfo";
import Use from "pages/resume/Use";
import Skill from "pages/resume/Skill";
import Certificate from "pages/resume/Certificate";
import Experience from "pages/resume/Experience";
import Education from "pages/resume/Education";
import Project from "pages/resume/Project";

export default function Recume() {
  return (
    <Container>
      <LeftSection>
        <SelfInfo />
        <Use />
        {/* <Certificate /> */}
      </LeftSection>
      <Section>
        <Skill />
        <Experience />
        <Education />
        <Project />
      </Section>
    </Container>
  );
}

const Container = styled.div`
  /* @media (min-width: 960px) { */
  /* display: flex; */
  /* } */
  margin: 0 auto;
  max-width: 1200px;
  font-size: 1.2rem;

  ul {
    list-style-type: disc;
    list-style-position: inside;

    li {
      margin-left: 10px;
      left: 10px;
    }
  }
`;

const LeftSection = styled.section`
  flex: 2;
`;

const Section = styled.section`
  flex: 3;
`;
