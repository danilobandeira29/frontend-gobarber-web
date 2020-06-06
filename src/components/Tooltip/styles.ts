import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  &:hover span {
    opacity: 1;
    visibility: visible;
  }

  svg:hover span {
    opacity: 1;
  }

  span {
    width: 160px;
    background: #ff9000;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;

    opacity: 0;
    visibility: hidden;
    transition: all 0.4s;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    color: #312e38;

    &::before {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-width: 6px;
      border-style: solid;
      border-color: #ff9000 transparent transparent transparent;
    }
  }
`;
