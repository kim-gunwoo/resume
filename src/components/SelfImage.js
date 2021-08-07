import styled from "styled-components";

export default function SelfImage({ alt, src }) {
  return <Container src={src} alt={alt} />;
}

const Container = styled.img`
  max-width: 300px;
  border-radius: 50px;
`;
