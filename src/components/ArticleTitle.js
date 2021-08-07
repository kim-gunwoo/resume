import styled from "styled-components";

export default function Article({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.h4`
  font-size: 1.5rem;
  font-weight: bold;
  color: #9b9a97;
`;
