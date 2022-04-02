import { data } from 'autoprefixer'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

const Gallery = (props: { data: any[] }) => {
  console.log(props)
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
          <Link to={`/photos/${image.image.childImageSharp.id}/`}>
            <GatsbyImage image={getImage(image.image)} alt="Sample Alter"/>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Gallery
