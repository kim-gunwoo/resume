import styled from "styled-components";
import SubTitle from "components/SubTitle";
import Article from "components/Article";
import ArticleTitle from "components/ArticleTitle";

export default function Experience() {
  return (
    <Container>
      <Article>
        <SubTitle>Experience </SubTitle>
        <ArticleTitle>
          크리스피드 | 2017.09 ~ 2021.04 ( 소프트웨어 엔지니어 )
        </ArticleTitle>
        <p>경영정보 시스템 유지보수 및 기능개선 고도화 업무를 진행 </p>
        <p>
          다양한 경영정보 시스템 서비스를 전담하여 고객과의 소틍을 통해 시스템을
          개선
        </p>
        <p>유연근무 시스템, 초과 근무 급여명세연계 관리등 개발업무를 진행</p>
        <p>
          회사 공통 프레임워크를 이해 신입사원 교욱을 진행 (2019년도부터 연
          3~4회 진행 )
        </p>
        KICOX 경영정보시스템 유지보수 및 유연 근무 시스템 개발
        <ul>
          <li>
            서비스를 전담으로 관리하며 요구사항 및 기존 시스템을 분석하여
            유연근무 시스템을 신규 개발
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
