import * as React from "react"

const Navigation = () => {
    return (
        <nav>
            <div>
                <h1 className="uppercase text-center text-4xl pt-4">Ashis Das</h1>
                <h2 className="text-center text-lg">Photography</h2>
            </div>
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