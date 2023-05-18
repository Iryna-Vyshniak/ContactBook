import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    margin: 0 auto;
    width: 100%;
    min-height: 100%;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;


    background-color: #dee2ff;
    letter-spacing: 0.02em;
    font-size: 0.85rem;
    letter-spacing: 0.07em;
    line-height: 1.85;

    overflow-x: hidden;
  }

  body::-webkit-scrollbar {
    appearance: none;
    background: #dee2ff;
    width: 6px;
    height: 5px;
}

  body::-webkit-scrollbar-corner {
    height: 0;
    }

  body::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 25px;
    }

  body::-webkit-scrollbar-thumb {
    background-color: #dee2ff;
    border-radius: 25px;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
}

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

  img {
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
}

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.black};
    text-shadow: ${props => props.theme.shadows.textShadow};
}

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1 1 auto;
    width: 100%;

}
`;
