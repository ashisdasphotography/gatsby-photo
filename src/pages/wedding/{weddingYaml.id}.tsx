import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../../components/Layout'

const PhotosPage = (props) => {
  console.log(props)
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
          <GatsbyImage image={getImage(props.data.weddingYaml.image.childImageSharp)} alt="Sample Alter"/>
          <Link to={`/wedding/${prevId}/`}>
            <button>Previous</button>
          </Link>
          <Link to={`/wedding/${nextid}/`}>
            <button>Next</button>
          </Link>

        </div>
      } />
  )
}

export const query = graphql`
  query GetWeddingImageQuery($id: String) {
    weddingYaml(id: { eq: $id }) {
      image {
        childImageSharp {
          gatsbyImageData(height: 800)
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
