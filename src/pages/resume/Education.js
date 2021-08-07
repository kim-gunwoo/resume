import styled from "styled-components";
import SubTitle from "components/SubTitle";
import Article from "components/Article";
import ArticleTitle from "components/ArticleTitle";

export default function Experience() {
  return (
    <Container>
      <Article>
        <SubTitle>Education </SubTitle>
        <ArticleTitle>위코드 부트캠프 | 2021.05 ~ 2021.07</ArticleTitle>
        React 관련 수업 수강 두번의 프로젝트 진행 기업협업을 통한 펫핀스 인턴
        진행 휠체어 코리아 닷컴 리뉴얼 작업에 참여
        <ArticleTitle>대덕인재개발원 | 2017.01 ~ 2017.07</ArticleTitle>
        JAVA, Spring 프레임워크 관련 수업 및 프로젝트 진행
      </Article>
    </Container>
  );
}

const Container = styled.div``;
