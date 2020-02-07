import React from "react";
import { Container } from 'react-awesome-styled-grid';
import styled from 'styled-components';
import { graphql, Link } from "gatsby";
import Img from "gatsby-image"
import Layout from "../components/Layout";
import { ThemeProvider } from 'styled-components';

const awesomegrid = {
  mediaQuery: 'only screen',
  columns: {
    xs: 4,
    sm: 8,
    md: 8,
    lg: 12,
    xl: 12,
  },
  gutterWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5,
  },
  paddingWidth: {
    xs: 1,
    sm: 1,
    md: 15,
    lg: 25,
    xl: 25,
  },
  container: {
    xs: 'full', // 'full' = max-width: 100%
    sm: 'full', // 'full' = max-width: 100%
    md: 'full', // 'full' = max-width: 100%
    lg: 90, // max-width: 1440px
    xl: 90, // max-width: 1440px
  },
  breakpoints: {
    xs: 1,
    sm: 48, // 768px
    md: 64, // 1024px
    lg: 90, // 1440px
    xl: 120, // 1920px
  },
}


const Title = styled.h1`
  font-size: 32px;
  margin: 32px 0;
`;

const FeaturedImageWrapper = styled.section`
  margin: 0 0 32px;
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

const PostWrapper = styled.div`
  margin: 0 0 32px;
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;
  return (
    <ThemeProvider theme={{ awesomegrid }}>
      <Layout>
        <Container>
          <Link to="/">
            <BackButton>
              Back to homepage
            </BackButton>
          </Link>
          <Title>{post.frontmatter.title}</Title>
          <FeaturedImageWrapper>
            <Img fluid={featuredImgFluid} />
          </FeaturedImageWrapper>
          <PostWrapper
            dangerouslySetInnerHTML={{ __html: post.html }}
            style={{
              fontSize: '18px',
              lineHeight: '1.8',
            }}
          />
        </Container>
      </Layout>
    </ThemeProvider>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(locale: "en", fromNow: true)
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1914) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;