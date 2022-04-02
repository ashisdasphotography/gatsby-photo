import { graphql } from 'gatsby'
import React from 'react'
import Gallery from '../components/Gallery'
import Layout from "../components/Layout"

const wedding = ({data}) => {
  return (
    <Layout
      body={<Gallery data={data.allWeddingYaml.nodes}/>} />
  )
}

export const query = graphql`
  query WeddingPageQuery {
    allWeddingYaml {
      nodes {
        image {
            childImageSharp {
              gatsbyImageData(height: 800)
              id
          }
        }
      }
    }
  }
`

export default wedding
