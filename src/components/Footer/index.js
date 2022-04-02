import * as React from "react"
import CopyRight from "./copyRight";
import MobileNumber from "./mobileNumber";

const Footer = () => {
    return (
        <div className="text-center mt-2">
          <MobileNumber />
          <CopyRight />
        </div>
    )
}

export default Footer;
