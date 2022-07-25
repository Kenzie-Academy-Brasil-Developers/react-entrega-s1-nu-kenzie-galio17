import styled, { css } from "styled-components";

const Button = styled.button`
  border-radius: 8px;
  padding: 10px 15px;

  ${({ primary }) =>
    primary
      ? css`
          background-color: var(--color-primary-1);
          color: var(--grey-1);

          &:hover {
            background-color: var(--color-primary-2);
          }
        `
      : css`
          background-color: var(--grey-2);

          &:hover {
            background-color: var(--grey-4);
            color: var(--grey-1);
          }

          &:active {
            background-color: var(--color-primary-1);
            color: var(--grey-1);
          }
        `}
`;

export default Button;
