import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = (props) => (
  <Layout>
    <Seo title="Home" />
    <ul>
      {props.data.allAsciidoc.edges.map(({ node }) => {
        console.log(node);
        return  (        
        <li key={node.id}>
          <Link to={node.fields.slug}>{node.document.title}</Link>
        </li>
      )})}
    </ul>
  </Layout>
)
 
export const query = graphql`
  {
    allAsciidoc(sort: {fields: pageAttributes___chapter}) {
      edges {
        node {
          id
          html
          document {
            title
          }
          fields {
            slug
          }
          pageAttributes {
            chapter
          }
        }
      }
    }
  }
`

export default IndexPage 
