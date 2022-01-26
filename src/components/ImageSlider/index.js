import * as React from "react"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import { useImageSliderMetadata } from "./sliderMetadata"

const ImageSlider = () => {
    const data = useImageSliderMetadata();

    console.log("Loading data from ImageSlider: ", data);

    return (
        <div className="flex justify-center h-auto p-8">
            {data.map((image, index) => 
                <GatsbyImage image={getImage(image.image)} alt="Sample Alter" key={index}/>
            )}
        </div>

    )
}

export default ImageSlider;