import React from 'react';
import { Global, css } from '@emotion/core';
import { CSSReset, useColorMode } from '@chakra-ui/core';
import 'focus-visible/dist/focus-visible';
import theme from 'styles/theme';
import { prismLightTheme, prismDarkTheme } from 'styles/prism';

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};
          ::selection {
            background-color: #47a3f3;
            color: #fefefe;
          }
          html {
            scroll-behavior: smooth;
          }

          #__next {
            min-height: 100vh;
            background: ${colorMode === 'light' ? theme.colors.gray[50] : theme.colors.gray[800]};
          }

          /* This will hide the focus indicator if the element receives focus via the mouse, */
          /* but it will still show up on keyboard focus. */
          .js-focus-visible :focus:not([data-focus-visible-added]) {
            outline: none;
            box-shadow: none;
          }
        `}
      />
      {children}
    </>
  );
};

export default GlobalStyle;
