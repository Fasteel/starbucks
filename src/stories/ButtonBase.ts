import styled from "styled-components";

export const ButtonBase = styled.button`
  display: inline-block;
  border-style: solid;
  border-width: 1px;
  border-radius: 50px;
  padding: 7px 16px;
  font-weight: 600;
  line-height: 1.2;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  &:active {
    transform: scale(0.85);
  }
`;
