/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators
  const blogPostTemplate = path.resolve('src/templates/blog-post.js')

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            date
            path
            title
            tags
          }
        }
      }
    }
  }`
  ).then((result) => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }

      const posts  = result.data.allMarkdownRemark.edges;

      posts.forEach(({node}) => {
        createPage({
          path: node.frontmatter.path,
          component: blogPostTemplate,
        })
      })

  })
}