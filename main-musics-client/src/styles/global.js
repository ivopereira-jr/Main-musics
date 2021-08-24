import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
  :root {
    --white: #ffffff;
    --background: #f8f9fa;
    --text: #494D4B;
    --text-title: #494D4B;
    --text-body: #808080;
    --border: #eaeaea;
    --favorite-yellow: #ffd60a;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 1rem = 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 1rem = 14px
    }
  }

  body, input, textarea, button {
    font-family: 'Inter', Arial, sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Lexend', Arial, sans-serif;
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
`
