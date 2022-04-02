import { Link } from "gatsby";
import * as React from "react"

const NavigationItems = () => {
    return (
      <React.Fragment>
        <div>Home</div>
          <div>Selected</div>
          <div>
            <Link to="/wedding/" activeClassName="text-black">Wedding</Link>
          </div>
          <div>Project</div>
          <div>About</div>
      </React.Fragment>
    )
}

export default NavigationItems;
