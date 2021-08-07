import styled from "styled-components";
import SubTitle from "components/SubTitle";
import Article from "components/Article";

export default function Use() {
  return (
    <Container>
      <Article>
        <SubTitle>Use</SubTitle>
        <table>
          <tbody>
            <tr>
              <td>Front</td>
              <td>:</td>
              <td>HTML, CSS, JavaScript, React, Sass, StyledComponents</td>
            </tr>
            <tr>
              <td>Back</td>
              <td>:</td>
              <td>Java, Spring, Oracle, SQL</td>
            </tr>
            <tr>
              <td>Etc</td>
              <td>:</td>
              <td>Git, SVN</td>
            </tr>
          </tbody>
        </table>
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
