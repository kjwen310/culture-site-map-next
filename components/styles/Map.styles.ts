import styled from 'styled-components'

export const StyledMap = styled.div`
  width: 100vw;
  height: 100vh;

  #map {
    width: 100%;
    height: 100%;
  }

  .leaflet-popup-content-wrapper {
    width: 280px;
    height: 240px;
    border-radius: 4px;

    @media(min-width: 768px) {
      width: 400px;
      height: 300px;
      border-radius: 12px;
    }
  }
`

export const StyledPopup = styled.div`
  width: 240px;
  height: 180px;
  padding-top: 6px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  p {
    font-size: 12px;
    color: #474747;
  }

  h4 {
    position: absolute;
    bottom: -8px;
    left: 0;
    right: 0;
    height: 40px;
    font-size: 14px;
    padding: 12px;
    margin: 8px 0;
    z-index: 3000;
    border-radius: 0 0 4px 4px;
    background-color: rgba(275, 275, 275, 0.75);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media(min-width: 768px) {
    width: 400px;
    height: 300px;

    img {
      border-radius: 12px;
    }

    p {
      font-size: 16px;
    }

    h4 {
      bottom: -16px;
      font-size: 16px;
      margin: 16px 0;
      padding: 10px 0 10px 16px;
      border-radius: 0 0 12px 12px;
    }
  }
`
