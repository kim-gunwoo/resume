import styled from "styled-components";
import SubTitle from "components/SubTitle";
import Article from "components/Article";
import ArticleTitle from "components/ArticleTitle";

export default function Project() {
  return (
    <Container>
      <Article>
        <SubTitle>Project</SubTitle>
        <p>CRA를 통해 프로젝트 초기세팅을 진행</p>
        <p>Git 과 GitHub을 통한 프로젝트 관리</p>
        <p>Trello, Slack 을 이용한 협업 및 일정관리를 하였습니다.</p>
        <ArticleTitle>
          <a
            href="https://github.com/kim-gunwoo/21-2nd-GanadaBang-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            가나다방
          </a>
        </ArticleTitle>
        <ul>
          <li>
            다방을 모티브로 React, React-Hooks, React Router, Styled-Components
            를 사용
          </li>
          <li>지도 및 매물 리스트 페이지를 구현</li>
        </ul>
        <ArticleTitle>
          <a
            href="https://github.com/kim-gunwoo/21-1st-seolleungbeer-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            선릉비어
          </a>
        </ArticleTitle>
        <ul>
          <li>제주맥주를 모티브로 React, React Router, Sass 를 사용</li>
          <li>상품상세, 상품결제, 메인 페이지 구현</li>
        </ul>
      </Article>
    </Container>
  );
}

const Container = styled.div``;
