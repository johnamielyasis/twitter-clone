import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { TweetBox } from './components/TweetBox';
import { Feed } from './components/Feed';
import { theme } from './constants';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: sans-serif;
  }
  a {
    text-decoration: none;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${theme.colors.surface};
  }
`;

const PageContainer = styled.div``;

const InnerContainer = styled.div`
  padding: 64px 16px;
  margin: 0 auto;
  max-width: 720px;
`;

export const App = () => {
  return (
    <PageContainer>
      <GlobalStyle />
      <InnerContainer>
        <TweetBox />
        <Feed />
      </InnerContainer>
    </PageContainer>
  );
}
