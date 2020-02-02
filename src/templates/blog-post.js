import React from "react";
import { Container } from 'react-awesome-styled-grid';
import { Link } from "gatsby";
import styled from 'styled-components';
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const Title = styled.h1`
  font-size: 32px;
  margin: 32px 0;
`;

const BackButton = styled.button`
  background: none;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Container>
        <Link to="/">
          <BackButton>
            Back to homepage
          </BackButton>
        </Link>
        <Title>{post.frontmatter.title}</Title>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          style={{
            fontSize: '18px',
            lineHeight: '1.8',
          }}
        />
      </Container>

    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(locale: "en", fromNow: true)
        title
      }
    }
  }
`;