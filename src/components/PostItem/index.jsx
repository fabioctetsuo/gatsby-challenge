import React from 'react';
import * as S from './styled';

const PostItem = ({ item }) => (
  <S.Container>
    <S.InfoContainer>
      <S.Category>{item.category}</S.Category>
      <S.Title>{item.title}</S.Title>
      <S.Description>{item.description}</S.Description>
      <S.DateTime>{item.date}</S.DateTime>
    </S.InfoContainer>
  </S.Container>
);

export default PostItem;
