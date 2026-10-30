import styled from 'styled-components';

export const BottomBarStyled = styled.div`
  position: absolute;
  bottom: 1;
  left: 0;
  width: 100%;
  height: 20px;
  border-radius: 40px 40px 0 0;
  background-color: var(--color-detail);
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    @media (max-width: 430px) {
      font-size: 9px;
      font-weight: 500;
    }
  }
`