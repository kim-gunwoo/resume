import styled from "styled-components";

export default function Title({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #3b7bd5;
`;
