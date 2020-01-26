import React from 'react';
import GlobalStyle from '../../styles/global';
import Header from '../Header';
import * as S from './styled';

const Layout = ({ children }) => (
  <S.Container>
    <GlobalStyle />
    <Header />
    <S.ContentWrapper>
      {children}
    </S.ContentWrapper>
  </S.Container>
);

export default Layout;
