import { css } from "styled-components";

export const commonTextStyle = css`
  color: red;
  font-weight: bold;
  font-size: 20px;
`;

export const commonTextStyleWithTheme = css`
  color: ${({ theme }) => theme.color.primary};
`;
