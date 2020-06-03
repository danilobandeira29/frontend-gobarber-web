import styled from 'styled-components';

import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
    input {
      background: #232129;
      border: 2px solid #232129;
      border-radius: 10px;

      width: 100%;
      padding: 16px;
      color: #f4ede8;
      & + input {
        margin-top: 8px;
      }

      &::placeholder {
        color: #666360;
      }
    }
    button {
      background: #ff9000;
      color: #312e38;
      border: 0;
      border-radius: 10px;

      width: 100%;
      height: 56px;
      padding: 0 16px;
      font-weight: 500;
      margin-top: 16px;

      transition: background-color 0.2s;
      &:hover {
        background: ${shade(0.2, '#ff9000')};
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
  }
  > a {
    text-decoration: none;
    color: #ff9000;
    display: flex;
    align-items: center;
    margin-top: 24px;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 10px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
