import styled from 'styled-components'

export const InfoContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 20px;
  right: 20px;
  height: 200px;
  z-index: 3000;
  background-color: rgba(275, 275, 275, 0.95);
  border-radius: 12px 12px 0 0;
  padding: 20px;
  overflow-y: auto;

  @media(min-width: 768px) {
    width: 420px;
    height: auto;
    top: 160px;
    bottom: 20px;
    left: 20px;
    right: 0;
    border-radius: 12px;
  }
`