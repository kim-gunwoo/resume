import styled from "styled-components";
import SubTitle from "components/SubTitle";
import Article from "components/Article";
import ArticleTitle from "components/ArticleTitle";

export default function Certificate() {
  return (
    <Container>
      <Article>
        <SubTitle>Certificate </SubTitle>
        {/* <ArticleTitle>정보처리기사</ArticleTitle> */}
        <p>정보처리기사</p>
      </Article>
    </Container>
  );
}

const Container = styled.div`
  table {
    td {
      padding-right: 10px;
    }
  }
`;
