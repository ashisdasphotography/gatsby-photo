import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const ImageSlider = () => {
    return (
        <div className="flex justify-center h-auto p-8">
            <StaticImage
                src="../../images/front/car.jpg"
                alt="A dinosaur"
                placeholder="dominantColor"
                className="mx-16"
            />
        </div>

    )
}

export default ImageSlider;