import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useImageSliderMetadata } from "./sliderMetadata"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ImageSlider = () => {
    const data = useImageSliderMetadata();

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        pauseOnHover: false
    };

    return (
        <Slider settings {...settings} className="md:w-4/5 mx-auto ">
            {data.map((image, index) =>
                <div key={index}>
                    <GatsbyImage image={getImage(image.image)} alt="Sample Alter"/>
                </div>
            )}
        </Slider>
    )
}

export default ImageSlider;
