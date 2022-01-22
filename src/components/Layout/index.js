import * as React from "react"
import Logo from "../Logo";
import Border from "./border";

const Layout = () => {
    return (
        <Border 
            logo={<Logo/>} 
            footer={<div>This is my fotter</div>} />
    )
}

export default Layout;