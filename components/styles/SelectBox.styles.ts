import styled from 'styled-components'

export const StyledSelectBox = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  height: 148px;
  display: block;
  background-color: rgba(275, 275, 275, 0.8);
  border-radius: 4px;
  padding: 12px;
  z-index: 3000;

  @media(min-width: 768px) {
    width: 420px;
    height: 110px;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 20px;
    border-radius: 12px;

    .wrapper {
      width: 200px;
      margin-right: 10px;
    }
  }
`

export const StyledSelectItem = styled.div`
  display: block;
  
  label {
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0.01em;
    margin: 0 12px 0 0;
  }

  .select-wrapper {
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.6);
    border-radius: 4px;

    select {
      font-size: 12px;
      padding: 4px 20px 4px 4px;
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      border: 0;
      outline: none;
      appearance: none;
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      right: 0;
      font-size: 12px;
      background-color: rgba(0, 0, 0, 0.1);
      height: 100%;
      width: 16px;
      pointer-events: none;
      cursor: pointer;
    }
  }

  &.city {
    margin: 0 0 10px;
  }

  @media(min-width: 768px) {
    display: flex;
    align-items: center;

    label {
      font-size: 16px;
    }
  
    .select-wrapper {
      select {
        font-size: 16px;
      }

      .icon {
        font-size: 12px;
      }
    }

    &.city {
      margin: 0 0 16px;
    }
  }
`
