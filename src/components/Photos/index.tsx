import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

const Photos = (props) => {
  console.log(props)
  return (
    <div className='w-fit mx-auto'>
      <GatsbyImage image={getImage(props.imageSharp)} alt="Sample Alter"/>
    </div>
  )
}

export default Photos
