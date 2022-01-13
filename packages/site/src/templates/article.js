import React from "react"
import { graphql } from "gatsby"

import Layout from "./../components/layout"

const Article = (props) => {
    return (
        <Layout>
            <h1>{props.data.asciidoc.document.title} </h1>
            {props.data.asciidoc.author && (
                <table>
                    <thead>
                        <tr>
                            <td colSpan="2">Author metadata</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>author.fullName</th>
                            <td>{props.data.asciidoc.author.fullName}</td>
                        </tr>
                        <tr>
                            <th>author.firstName</th>
                            <td>{props.data.asciidoc.author.firstName}</td>
                        </tr>
                        <tr>
                            <th>author.lastName</th>
                            <td>{props.data.asciidoc.author.lastName}</td>
                        </tr>
                        <tr>
                            <th>author.middleName</th>
                            <td>{props.data.asciidoc.author.middleName}</td>
                        </tr>
                        <tr>
                            <th>author.authorInitials</th>
                            <td>{props.data.asciidoc.author.authorInitials}</td>
                        </tr>
                        <tr>
                            <th>author.email</th>
                            <td>{props.data.asciidoc.author.email}</td>
                        </tr>
                    </tbody>
                </table>
            )}
            {props.data.asciidoc.revision && (
                <table>
                    <thead>
                        <tr>
                            <td colSpan="2">Revision metadata</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>revision.date</th>
                            <td>{props.data.asciidoc.revision.date}</td>
                        </tr>
                        <tr>
                            <th>revision.number</th>
                            <td>{props.data.asciidoc.revision.number}</td>
                        </tr>
                        <tr>
                            <th>revision.remark</th>
                            <td>{props.data.asciidoc.revision.remark}</td>
                        </tr>
                    </tbody>
                </table>
            )}
            <div
                dangerouslySetInnerHTML={{ __html: props.data.asciidoc.html }}
            />
        </Layout>
    )
}

export default Article

export const pageQuery = graphql`
  query($id: String!) {
    asciidoc(id: { eq: $id }) {
      html
      document {
        title
        subtitle
        main
      }
    }
  }
`