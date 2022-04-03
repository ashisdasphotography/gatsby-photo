import { graphql } from 'gatsby'
import React from 'react'
import Gallery from '../../../components/Gallery'
import Layout from '../../../components/Layout'

const WaterCrisis = ({data}) => {
  return (
    <Layout body={
      <Gallery data={data.allWaterYaml.nodes}/>
    } />
  )
}

export const query = graphql`
  query WaterCrisisPageQuery {
    allWaterYaml {
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

export default WaterCrisis
