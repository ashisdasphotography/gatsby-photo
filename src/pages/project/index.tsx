import { graphql } from 'gatsby'
import React from 'react'
import Folder, { FolderProps, FolderPropsData } from '../../components/Folder'
import Layout from '../../components/Layout'

const Project = ({data}) => {
  console.log(data)

  var folders:any[] = data.allProjectFolderYaml.nodes;

  let folderProps = folders.map(item => ({
      image: item.thumbnail.childImageSharp,
      caption: item.caption,
      urlPath: item.urlPath
    } as FolderPropsData));


  return (
    <Layout body={<Folder data={folderProps} />} />
  )
}

export const query = graphql`
  query AllProjectFolderPageQuery {
  allProjectFolderYaml {
    nodes {
      caption
      urlPath
      thumbnail {
        childImageSharp{
					gatsbyImageData(width: 400)
        }
      }
    }
  }
}
`

export default Project
