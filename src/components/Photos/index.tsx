import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

const Photos = (props) => {
  return (
    <div>
      <GatsbyImage image={getImage(props.data.imageSharp)} alt="Sample Alter"/>
    </div>
  )
}

export default Photos
