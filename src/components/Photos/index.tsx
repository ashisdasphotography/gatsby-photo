import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'
import React from 'react'

interface PhotoProps {
  image: ImageDataLike
  caption?: string
}

const Photos = (props: PhotoProps) => {
  console.log(props)
  return (
    <div className='w-fit mx-auto'>
      <GatsbyImage
        image={getImage(props.image)}
        alt={props.caption ?? ''} />
    </div>
  )
}

export default Photos
