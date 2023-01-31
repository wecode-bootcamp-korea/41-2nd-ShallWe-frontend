import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import mixin from './styles/mixin';

import Router from './Router';
ReactDOM.render(
  <>
    <ThemeProvider theme={{ style: theme, mixin }}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
