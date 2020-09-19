import Head from 'next/head';
import theme from 'styles/theme';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from 'components/MDXComponents';
import { ThemeProvider, ColorModeProvider } from '@chakra-ui/core';
import GlobalStyle from 'styles/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider value='dark'>
        <MDXProvider components={MDXComponents}>
          <GlobalStyle>
            <>
              <Head>
                <link
                  href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
                  rel='stylesheet'
                />
              </Head>

              <Component {...pageProps} />
            </>
          </GlobalStyle>
        </MDXProvider>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
