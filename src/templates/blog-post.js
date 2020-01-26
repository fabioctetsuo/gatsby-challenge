import React from "react";
import styled from 'styled-components';
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const Title = styled.h1`
  font-size: 32px;
  color: #f0f0f0;
  margin: 32px 0;
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <Title>{post.frontmatter.title}</Title>
        <div dangerouslySetInnerHTML={{ __html: post.html }} style={{
          color: '#f0f0f0',
          fontSize: '18px',
          lineHeight: '1.5',
        }} />
      </div>
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