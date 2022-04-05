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
        <Link to="/aerial/" activeClassName="text-black font-bold" partiallyActive={true}>Aerial</Link>
      </div>
      <div>
        <Link to="/project/" activeClassName="text-black font-bold" partiallyActive={true}>Project</Link>
      </div>
      <div>About</div>
    </React.Fragment>
  )
}

export default NavigationItems;
