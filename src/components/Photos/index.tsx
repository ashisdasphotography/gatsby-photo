import { Link } from 'gatsby'
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'
import React from 'react'
import NavigationButton from './navigationButton'

interface PhotoProps {
  image: ImageDataLike
  caption?: string
  nextId?: string
  prevId?: string
  pathParam: string
}

const Photos = (props: PhotoProps) => {
  // let prevLink = `/${props.pathParam}/${props.prevId}/`;
  // let nextLink = `/${props.pathParam}/${props.nextId}/`;
  return (
    <div>
      <div className='w-fit mx-auto px-2'>
        <GatsbyImage
          image={getImage(props.image)}
          alt={props.caption ?? ''} />
      </div>
      <div className="flex">
        <NavigationButton
          isActive={props.prevId != null}
          label='<'
          link={`/${props.pathParam}/${props.prevId}/`}
          className='ml-2'/>

        <NavigationButton
          isActive={props.nextId != null}
          label='>'
          link={`/${props.pathParam}/${props.nextId}/`}
          className='ml-auto mr-2'/>
      </div>
    </div>
  )
}

export default Photos
