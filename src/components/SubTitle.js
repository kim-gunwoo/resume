import styled from "styled-components";

export default function SubTitle({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;
