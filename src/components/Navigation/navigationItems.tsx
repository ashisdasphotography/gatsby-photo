import { Link } from "gatsby";
import * as React from "react"

const NavigationItems = () => {
  return (
    <React.Fragment>
      <div>Selected</div>
      <div>Exhibited</div>
      <div>
        <Link to="/wedding/" activeClassName="text-black">Wedding</Link>
      </div>
      <div>Areal</div>
      <div>
        <Link to="/project/water-crisis/" activeClassName="text-black">Project</Link>
      </div>
      <div>About</div>
    </React.Fragment>
  )
}

export default NavigationItems;
