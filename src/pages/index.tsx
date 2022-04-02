import * as React from "react"
import ImageSlider from "../components/ImageSlider"
import Layout from "../components/Layout"

// markup
const IndexPage = () => {
  return (
    <Layout
      body={<ImageSlider/>}/>
  )
}

export default IndexPage
