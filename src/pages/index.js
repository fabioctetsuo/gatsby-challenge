import React from "react"
import { Container, Row, Col } from 'react-awesome-styled-grid';
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
      <Container>
        <Row>
          {posts.map(({ node }) => (
            <Col xs={4} sm={4} md={2} lg={3}>
              <Link to={node.fields.slug}>
                <PostItem item={node.frontmatter} />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
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
