import styled from "styled-components";

export default function StyleFont({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.span`
  color: #3b7bd5;
  font-weight: 700;
`;
