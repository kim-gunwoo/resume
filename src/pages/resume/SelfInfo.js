import styled from "styled-components";
import Title from "components/Title";
import SubTitle from "components/SubTitle";
import Article from "components/Article";
import SelfArticle from "components/SelfArticle";
import SelfImage from "components/SelfImage";
import me from "assets/image/me.png";

export default function SelInfo() {
  return (
    <Container>
      <Article>
        <ImageWrapper>
          <SelfImage src={me} alt="me" />
        </ImageWrapper>
        <Title>김건우 </Title>
        <SelfArticle>안녕하세요.</SelfArticle>
        <SelfArticle>
          <StyleFont>깔끔한 코드를 만들자 !</StyleFont>
        </SelfArticle>
        <SelfArticle>프론트엔드 개발자 김건우 입니다.</SelfArticle>
        <SelfArticle>
          사용자가 더욱 편안한 사용감을 개발자에게는 좀 더 깔끔하고 보기 좋은
          코드를 좋아하는 프론트엔드 개발자입니다.
        </SelfArticle>
      </Article>
      <Article>
        <SubTitle>About Me </SubTitle>
        <p>생년월일 : 93.06.26.</p>
        <p>경기도 수원시</p>
        <p>프론트엔드 개발자</p>
        <p>한남대 멀티미디어공학 졸업</p>
        <table>
          <tbody>
            <tr>
              <td>Email</td>
              <td>:</td>
              <td>kgunu93@gmail.com</td>
            </tr>
            <tr>
              <td>Blog</td>
              <td>:</td>
              <td>
                <a
                  href="https://velog.io/@gunu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://velog.io/@gunu
                </a>
              </td>
            </tr>
            <tr>
              <td>GitHub</td>
              <td>:</td>
              <td>
                <a
                  href="https://github.com/kim-gunwoo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/kim-gunwoo
                </a>
              </td>
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

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyleFont = styled.i`
  color: #3b7bd5;
  font-weight: 700;
`;
