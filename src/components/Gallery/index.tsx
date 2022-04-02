import { data } from 'autoprefixer'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

const Gallery = (props: { data: any[] }) => {
  return (
    <div
      className='
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4

        gap-4
        mx-2'>

      {props.data.map((image, index) =>
        <div key={index}>
          <GatsbyImage image={getImage(image.image)} alt="Sample Alter" />
        </div>
      )}
    </div>
  )
}

export default Gallery
