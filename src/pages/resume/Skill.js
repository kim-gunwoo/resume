import styled from "styled-components";
import SubTitle from "components/SubTitle";
import Article from "components/Article";

export default function Skill() {
  return (
    <Container>
      <Article>
        <SubTitle>Skill</SubTitle>
        <ul>
          <li>HTML 웹 표준 시맨틱 마크업을 준수하여 개발 할 수 있습니다.</li>
          <li>CSS, Sass, Styled-components 스타일링을 사용 할 수 있습니다..</li>
          <li>JavaScript ES6+ 표준 스펙을 활용해 개발을 합니다.</li>
          <li>
            React CRA를 사용하여 프로젝트 초기 설정과 구조를 만들수 있습니다.
            <ul>
              <li>
                함수형 컴포넌트와 hooks, class형 컴포넌트 모두를 사용할 수
                있으며 컴포넌트 라이프 사이클에 대해 이해하고 이를 적용할 수
                있습니다.
              </li>
              <li>컴포넌트를 적절하게 분리하여 개발 할 수 있습니다.</li>
              <li>
                서드 파티 라이브러리를 통해 필요한 기능을 구현 할 수 있습니다.
              </li>
            </ul>
          </li>
          <li>
            Java Spring 프레임워크 실무 경험을 했으며 MVC 패턴으로 기능 개발을
            할 수 있습니다.
          </li>
          <li>
            RDBMS Oracle 실무 경험을 했으며 데이터모델링 경험과 함수, 프로시져,
            등 사용할 수 있으며 쿼리 작성을 능숙하게 할 수 있습니다.
          </li>
          <li>
            Git 의 작동 원리를 이해하고 깃 플로우에 맞춰 rebase, reset 등 명령어
            사용할 수 있습니다.
          </li>
        </ul>
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
