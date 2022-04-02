import * as React from "react"
import NavigationItems from "./navigationItems";

const Navigation = () => {
    return (
        <nav>
            <div
              className="
                flex
                flex-row
                space-x-10
                p-8
                justify-center
                uppercase
                font-courier-new
                text-lg
                text-gray-500
                invisible
                md:visible
              "
            >
                <NavigationItems />
            </div>
        </nav>
    )
}

export default Navigation;
