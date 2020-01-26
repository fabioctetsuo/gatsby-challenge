import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as S from './styled';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata;
  return (
    <S.Container>
      <h1>{title}</h1>
    </S.Container>
  );
};

export default Header;
