import { graphql } from 'gatsby'
import React from 'react'
import Gallery from '../../components/Gallery'
import Layout from "../../components/Layout"

const wedding = ({data}) => {
  return (
    <Layout
      body={
        <Gallery data={data.allWeddingYaml.nodes} pathBase='wedding'/>}
      />
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
        id
      }
    }
  }
`

export default wedding
