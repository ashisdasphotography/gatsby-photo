import { graphql } from 'gatsby'
import React from 'react'
import Gallery from '../../components/Gallery'
import Layout from "../../components/Layout"

const Aerial = ({ data }) => {
  return (
    <Layout
      body={
        <Gallery data={data.allAerialYaml.nodes} pathBase='aerial'/>
      } />
  )
}

export const query = graphql`
  query AerialPageQuery {
    allAerialYaml {
      nodes {
        image {
            childImageSharp {
              gatsbyImageData(width: 400)
          }
        }
        id
      }
    }
  }
`

export default Aerial
