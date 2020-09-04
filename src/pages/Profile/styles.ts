import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.div`
  header {
    display: flex;
    align-items: center;

    height: 144px;
    background: #28262e;

    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        color: #999591;
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  margin: -176px auto 0;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
    }
  }

  a {
    text-decoration: none;
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;

export const AvatarProfile = styled.div`
  position: relative;
  align-self: center;
  margin-bottom: 36px;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  button {
    position: absolute;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 0;
    background: #ff9000;
    bottom: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background 0.2s;
    svg {
      color: #312e38;
      width: 20px;
      height: 20px;
    }

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;
