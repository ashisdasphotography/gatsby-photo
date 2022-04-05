import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../../components/Layout'
import Photos from '../../components/Photos'

const PhotosPage = (props) => {
  let allImageIds = props.data.allAerialYaml.nodes
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
        <div className='w-fit mx-auto'>

          <Photos
            image={props.data.aerialYaml.image.childImageSharp}
            pathParam='aerial'
            nextId={nextid}
            prevId={prevId} />

        </div>
      } />
  )
}

export const query = graphql`
  query GetAerialImageQuery($id: String) {
    aerialYaml(id: { eq: $id }) {
      image {
        childImageSharp {
          gatsbyImageData(width: 1200)
        }
      }
    }
    allAerialYaml {
      nodes {
        id
      }
    }
  }
`

export default PhotosPage
