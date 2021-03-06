import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../../components/Layout'
import Photos from '../../components/Photos'

const PhotosPage = (props) => {
  let allImageIds = props.data.allWeddingYaml.nodes
  let prevId
  let nextid

  for (let index = 0; index < allImageIds.length; index++) {
    const id = allImageIds[index].id;

    if (id === props.pageContext.id) {
      if(index != allImageIds.length - 1){
        nextid = allImageIds[index + 1].id
      }
      break
    }
    prevId = id;
  }

  return (
    <Layout
      body={
        <div>
          <Photos
            image={props.data.weddingYaml.image.childImageSharp}
            pathParam='wedding'
            nextId={nextid}
            prevId={prevId} />
        </div>
      } />
  )
}

export const query = graphql`
  query GetWeddingImageQuery($id: String) {
    weddingYaml(id: { eq: $id }) {
      image {
        childImageSharp {
          gatsbyImageData(width: 1200)
        }
      }
    }
    allWeddingYaml {
      nodes {
        id
      }
    }
  }
`

export default PhotosPage
