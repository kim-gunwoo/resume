import styled from "styled-components";
import SubTitle from "components/SubTitle";
import Article from "components/Article";
import ArticleTitle from "components/ArticleTitle";

export default function Experience() {
  return (
    <Container>
      <Article>
        <SubTitle>Experience </SubTitle>
        <ArticleTitle>펫핀스 | 2021.07 ( 프론트엔드 | 인턴 )</ArticleTitle>
        <p>
          펫핀스 한달 간 인턴 진행하며 휠체어 코리아 닷컴 리뉴얼 작업에 참여
        </p>
        <ul>
          <li>
            Zeplin을 통해 디자이너와 소통하며 메인, Qna, 공지사항, 상품상세,
            보험가입 페이지 개발
          </li>
          <li>
            상품상세 및 보험 가입하기 페이지의 상태를 Context API 및 Redux를
            사용하여 관리
          </li>
        </ul>
        <ArticleTitle>
          크리스피드 | 2017.09 ~ 2021.04 ( 소프트웨어 엔지니어 | 대리 )
        </ArticleTitle>
        <p>경영정보 시스템 유지보수 및 기능개선 고도화 업무를 진행 </p>
        <p>
          회사 공통 프레임워크를 이해하여 신입사원 교욱을 진행 (2019년도부터 연
          3~4회 진행 )
        </p>
        KICOX 경영정보시스템 유지보수 및 신규 근무 시스템 개발
        <ul>
          <li>
            서비스를 전담으로 관리하며 요구사항 및 기존 시스템을 분석하여 유연
            근무, 초과 근무 급여명세연계 관리등 개발업무를 진행
          </li>
        </ul>
        행정정보시스템 복무 시스템 및 외부강의 시스템 개발
        <ul>
          <li>
            고객사와의 협의를 통해 요구사항 분석후 복무 시스템 및 외부강의
            시스템을 개발
          </li>
        </ul>
        에너지경제연구원 통합정보시스템
        <ul>
          <li>
            유지보수 서버 이전 작업부터 유지보수 업무까지 진행하며 시스템의
            안정화를 진행 기존 문제가 되던 프로세스를 개선
          </li>
        </ul>
      </Article>
    </Container>
  );
}

const Container = styled.div``;
