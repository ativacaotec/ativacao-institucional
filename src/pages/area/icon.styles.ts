import styled from "styled-components";

export const StyledIcon = styled.img<{ $top : string, $left : string}>`
  position: absolute;
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
  width: 40px;
  cursor: pointer;
`;