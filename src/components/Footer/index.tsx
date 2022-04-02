import * as React from "react"
import CopyRight from "./copyRight";
import ExternalLinks from "./externalLinks";
import MobileNumber from "./mobileNumber";

const Footer = () => {
    return (
        <div className="text-center mt-3">
          <ExternalLinks />
          <MobileNumber />
          <CopyRight />
        </div>
    )
}

export default Footer;
