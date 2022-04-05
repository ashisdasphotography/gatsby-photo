import { data } from 'autoprefixer'
import { Link } from 'gatsby'
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'
import React from 'react'

interface GalleryProps{
  data: [{
    image: ImageDataLike,
    id: string
  }]
  pathBase: string
}

const Gallery = (props: GalleryProps) => {
  return (
    <div
      className='
        grid
        grid-cols-2
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-4
        mx-5'>

      {props.data.map((image, index) =>
        <div key={index} className='hover:shadow-md hover:shadow-gray-400 h-fit mx-2'>
          <Link to={`/${props.pathBase}/${image.id}/`}>
            <GatsbyImage image={getImage(image.image)} alt="Sample Alter"/>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Gallery
