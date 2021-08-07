import styled from "styled-components";

export default function Article({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.article`
  padding: 5px;
  font-size: 1.1rem;
`;
