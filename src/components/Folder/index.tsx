import { Link } from 'gatsby'
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'
import React from 'react'

export interface FolderProps {
  data: FolderPropsData[]
}

export interface FolderPropsData{
  image: ImageDataLike
  caption: string
  urlPath: string
}

const Folder = (props: FolderProps) => {
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

      {props.data.map((item, index) =>
        <div key={index} className='hover:shadow-md hover:shadow-gray-400 h-fit mx-2'>
          <Link to={`/${item.urlPath}/`}>
            <GatsbyImage image={getImage(item.image)} alt="Sample Alter" />
            <div className='
              font-courier-new
              text-center'>
                {item.caption}</div>
          </Link>
        </div>
      )}

    </div>
  )
}

export default Folder
