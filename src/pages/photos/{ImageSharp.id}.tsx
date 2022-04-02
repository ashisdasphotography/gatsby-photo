import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../../components/Layout'

const PhotosPage = (props) => {
  console.log(props)
  return (
    <Layout
      body={<GatsbyImage image={getImage(props.data.imageSharp)} alt="Sample Alter"/>} />
  )
}

export const query = graphql`
  query GetImageQuery($id: String) {
    imageSharp(id: { eq: $id }) {
      gatsbyImageData(height: 800)
    }
  }
`

// query MyQuery {
//   imageSharp(id: {eq: "17f417e3-8cd9-502b-8c85-bd1dd5e820ec"}) {
//     gatsbyImageData(height: 800)
//   }
// }

export default PhotosPage
