import { css } from "styled-components";

const flex = (justify = "center", items = "center", direction = "row") => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${items};
  flex-direction: ${direction};
`;

const mixin = { flex };

export default mixin;
