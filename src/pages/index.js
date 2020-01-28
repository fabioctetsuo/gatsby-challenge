import React from "react"
import { Link } from "gatsby";
import { graphql } from 'gatsby';
import Layout from "../components/Layout"
import PostItem from '../components/PostItem';
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Home" />
      {posts.map(({ node }) => (
        <Link to={node.fields.slug}>
          <PostItem item={node.frontmatter} />
        </Link>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date(fromNow: true, locale: "en")
            description
            category
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage
