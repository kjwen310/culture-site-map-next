import styled from 'styled-components'

export const StyledSiteInfo = styled.div`
  position: absolute;
  top: 36px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4000;
  padding: 12px;
  background-color: rgba(275, 275, 275. 0.95);

  h2 {
    font-size: 24px;
    letter-spacing: 0.01em;
    color: rgba(0, 0, 0, 0.75);
    margin: 0 0 20px;
  }

  ul {
    margin: 0 0 20px;
    li {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.6);
    }
    li + li {
      margin: 8px 0 0;
    }
  }

  .content {
    padding: 0 0 12px;
    p {
      font-size: 16px;
      line-height: 1.4;
      letter-spacing: 0.01em;
      color: rgba(0, 0, 0, 0.6);
      white-space: pre-wrap;
      margin: 0 0 12px;
    }
  }

  .close-icon {
    position: absolute;
    top: -24px;
    right: 8px;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background-color: #f4f5f6;
    cursor: pointer;
  }

  @media(min-width: 768px) {
    top: 0;
    padding: 20px;

    h2 {
      margin-top: 24px;
    }

    .content {
      padding: 0 0 20px;
    }

    .close-icon {
      top: 12px;
    }
  }
`
