import * as React from "react"

const Navigation = () => {
    return (
        <nav>
            <div className="flex flex-row space-x-10 p-8 justify-center uppercase">
                <div>Home</div>
                <div>Selected</div>
                <div>Wedding</div>
                <div>Project</div>
                <div>About</div>
            </div>
        </nav>
    )
}

export default Navigation;