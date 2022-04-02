import * as React from "react"
import NavigationItems from "./navigationItems";

const Navigation = () => {
    return (
        <nav>
            <div
              className="
                flex
                flex-row
                space-x-2
                md:space-x-10
                p-8
                justify-center
                uppercase
                font-courier-new
                text-sm
                md:text-lg
                text-gray-500
              "
            >
                <NavigationItems />
            </div>
        </nav>
    )
}

export default Navigation;
