import * as React from "react"
import Logo from "../Logo";
import Border from "./border";
import Footer from "../Footer";
import Navigation from "../Navigation"

interface LayoutProps {
  body: JSX.Element
}

const Layout = (props: LayoutProps) => {
    return (
        <Border
            logo={<Logo />}
            footer={<Footer />} >

            <Navigation />
            {props.body}
        </Border>
    )
}

export default Layout;
