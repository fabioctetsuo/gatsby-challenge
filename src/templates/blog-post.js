import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const Title = styled.h1`
  font-size: 32px;
  color: #f0f0f0;
  margin: 32px 0;
`;

const BackButton = styled.button`
  background: #28384a;
  padding: 8px 16px;
  color: white;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #466485;
  }
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <Link to="/">
          <BackButton>
            Back to homepage
          </BackButton>
        </Link>
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