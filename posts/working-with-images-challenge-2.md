---
date: 2020-01-26 06:46:23
title: Working with images - Challenge 2
description: I'm excited to tell you guys about my experience working with images in gatsby.
category: gatsby
background: "#7d669e"
featuredImage: ../assets/static/images/gatsby-images.jpeg
---

I started to read about the first challenge, and to my surprise, the outcome, in the end, was to create a new blog to tell my experiences developing the application.

As a first step, it was recommended to read the beginner-focused gatsby tutorials and complete lessons 0-8, and that's where I felt a little lost since I had already done a course which we had to create a blog and I started to think, should I read the tutorials or not.

I decided to go deep in the documentation and learn everything again. I can tell you that it was the best decision I could ever make because I was seeing some really important details that the course hasn't explained to me.

I have experience developing React applications, so at least in this part there were no big surprises, but understanding the Gatsby lifecycle was just mind-blowing.

It's cool that during build time, gatsby can pull the data from anywhere, since API's, CMS, markdown, etc, all you need is a source plugin, which is responsible to fetch data from their source.

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts/`,
      },
    },
  ],
}
```
In that case, I used the gatsby-source-filesystem, which knows how to fetch data from the file system so I can get my markdowns in the /posts directory.

Sometimes, the data you're fetching doesn't return in the way you expect, for example, that's what it happens when we are working with markdown files. That's because when we are using gatsby-source-filesystem (which is a source plugin as commented above) we get data specifically about the file, like filename, size, creation date, extension, etc. But not the content from the file.

What if you want to display the content from the markdown?
That's where gatsby transformer plugins come in! They're responsible to get the raw content from the source and transform into something more usable. In that case, I used gatsby-transformer-remark, responsible for parse markdown files using remark.

So, with everything at hand, all I need was to display the posts frontmatter information, so I created a simple index page, to list the blog posts, with a resume of the post, and that's where I used the graphql tag function, which behind the scenes, is handled in a particular way by Gatsby. So I made a query, and that's it! I had all the data from the markdown in my React component as a prop!

I had a page that displays a list for all the posts, but only frontmatter information, what if I had to show all the text for the post?  That's where we need to create pages programmatically using the gatsby-node.

```javascript
const { createFilePath } = require('gatsby-source-filesystem');
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/blog-post.js'),
      context: {
        slug: node.fields.slug,
      },
    });
  })
};
```
During the process, I understood that I need to create a slug or an identifier for each post, so I used the onCreateNode API, that allowed me to create a new node field with slug information. To do that, I checked if the node type was MarkdownRemark, and I used the createFilePath from gatsby-source-filesystem to create a new slug and all I had to do was to create a node field with the slug for each post.
After that, the next step is to create the page. So gatsby provides the createPages API, where we have access to graphql, we get the node with the slug created in the previous process and then we create a page for each node queried using the createPage method.

And that's it! I made a simple blog, using some cool API's from gatsby, I learned a lot more from the lifecycle, understood how to fetch data, and how to transform it into something that can be more usable and how to create pages programmatically.