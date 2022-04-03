import { Link } from "gatsby";
import * as React from "react"

const NavigationItems = () => {
  return (
    <React.Fragment>
      <div>Selected</div>
      <div>Exhibited</div>
      <div>
        Wedding
      </div>
      <div>
        <Link to="/aerial/" activeClassName="text-black">Aerial</Link>
      </div>
      <div>
        <Link to="/project/water-crisis/" activeClassName="text-black">Project</Link>
      </div>
      <div>About</div>
    </React.Fragment>
  )
}

export default NavigationItems;
