import styled from "styled-components";

export default function SelfArticle({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.article`
  font-size: 1.5rem;
`;
