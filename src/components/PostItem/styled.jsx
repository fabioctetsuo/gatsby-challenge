import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  min-height: 200px;
  border-radius: 16px;
  background: #28384a;
  padding: 24px;
  box-shadow: 0px 0px 16px -1px rgba(0,0,0,0.52);
  margin: 32px 0;
  color: #f0f0f0;
  display: flex;
  flex-direction: column;

  -webkit-box-shadow: 0px 0px 16px -1px rgba(0,0,0,0.52);
  -moz-box-shadow: 0px 0px 16px -1px rgba(0,0,0,0.52);
`;

export const Title = styled.h3`
  font-size: 24px;
  margin: 0 0 24px;
`;

export const Description = styled.h4`
  font-size: 16px;
`;

export const Category = styled.p`
  font-size: 12px;
  margin: 0 0 16px;
`;

export const DateTime = styled.p`
  font-size: 12px;
  margin: 24px 0 0;
`;