import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, StaticQuery } from "gatsby"

const getImageData = graphql`
{
  allFile {
    edges {
      node {
        relativePath
        extension
        size
        birthTime
      }
    }
  }
}
`

export default () => (
  <Layout>
    <h1>Hello from page 3</h1>
    <h3>Image File Data</h3>

    <StaticQuery
      query={getImageData}
      render={
        data => (
          <table>
            <thead>
              <th>Relative Path</th>
              <th>Size of Image</th>
              <th>Extension</th>
              <th>Birthtime</th>
            </thead>
            <tbody>
              {data.allFile.edges.map((edge, index) => (
                <tr key={index}>
                  <td>{edge.node.relativePath}</td>
                  <td>{edge.node.size}</td>
                  <td>{edge.node.extension}</td>
                  <td>{edge.node.birthTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      }
    />
    <Link to='/page-2'>Go to page to Page 2</Link>
    <Link to='/'>Go to page Homepage</Link>

  </Layout>

)