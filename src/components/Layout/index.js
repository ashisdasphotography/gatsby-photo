import * as React from "react"
import Logo from "../Logo";
import Border from "./border";
import Footer from "../Footer";
import Navigation from "../Navigation"
import ImageSlider from "../ImageSlider";

const Layout = () => {
    return (
        <Border
            logo={<Logo />}
            footer={<Footer />} >

            <Navigation />
            <ImageSlider />
        </Border>
    )
}

export default Layout;