import styled from 'styled-components'

export const SiteCountContainer = styled.div`
  text-align: right;
  margin: 12px 0 0;

  span {
    font-size: 10px;
    letter-spacing: 0.01em;
    color: rgba(0, 0, 0, 0.6);
  }

  .area {
    margin: 0 0 0 4px;
  }

  .amount {
    margin: 0 0 0 4px;
  }

  .count {
    font-size: 18px;
    line-height: 1;
    letter-spacing: 0.01em;
    color: rgba(0, 0, 0, 0.75);
    margin: 0 8px;
  }

  @media(min-width: 768px) {
    margin: 0;

    span {
      font-size: 12px;
    }

    .amount {
      margin: 0 0 0 12px;
    }

    .count {
      font-size: 36px;
    }    
  }
`