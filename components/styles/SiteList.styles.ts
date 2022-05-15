import styled from 'styled-components'

export const SiteListContainer = styled.ul`
  width: 100%;

  li {
    border-bottom: 2px solid #DCDCDC;
    border-radius: 2px;
    cursor: pointer;
    padding: 12px 0;
    &:hover {
      background: #F5F5F5;
    }

    h3 {
      font-size: 24px;
      font-weight: 500;
      line-height: 1.3;
      letter-spacing: 0.01em;
      color: rgba(0, 0, 0, 0.75);
      margin: 0 0 8px;
    }

    p {
      font-size: 14px;
      line-height: 1.2;
      margin: 0 0 4px;
      color: rgba(0, 0, 0, 0.6);
    }

    a {
      color: #007bff;
    }
  }
`
export const SiteListNoResult = styled.div`
  width: 100%;
  margin: 20px 0 0;
  font-size: 36px;

  .icon {
    width: 100%;
    text-align: center;
    margin: 0 0 16px;
  }

  p {
    font-size: 16px;
    line-hieght: 1.5;
    letter-spacing: 0.05em;
    color: rgba(0, 0, 0, 0.3);
    text-align: center;
  }
`
