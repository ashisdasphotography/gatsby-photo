import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../../../components/Layout'
import Photos from '../../../components/Photos'

const PhotosPage = (props) => {
  console.log(props)
  let allImageIds = props.data.allWaterYaml.nodes
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
          {/* <GatsbyImage image={getImage(props.data.waterYaml.image.childImageSharp)} alt="Sample Alter"/> */}
          <Photos image={props.data.waterYaml.image.childImageSharp} />

          {/* <Link to={`/project/water-crisis/${prevId}/`}>
            <button>Previous</button>
          </Link>
          <Link to={`/project/water-crisis/${nextid}/`}>
            <button>Next</button>
          </Link> */}

        </div>
      } />
  )
}

export const query = graphql`
  query GetWaterImageQuery($id: String) {
    waterYaml(id: { eq: $id }) {
      image {
        childImageSharp {
          gatsbyImageData(width: 1200)
        }
      }
    }
    allWaterYaml {
      nodes {
        id
      }
    }
  }
`

export default PhotosPage
