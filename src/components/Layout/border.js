import * as React from "react"

const Border = (props) => {
    return (
        <div className="min-h-screen">
            <div className="flex flex-row"> {/* Logo */}
                <div className="w-1/12">
                    <div className="h-1/2">

                    </div>
                    <div className=" h-1/2 border-r-2 border-gray-300">

                    </div>
                </div>
                <div className="w-3/12">
                    <div className="h-1/2">

                    </div>
                    <div className=" h-1/2 border-t-2 border-gray-300">

                    </div>
                </div>
                <div className="w-4/12">
                    {props.logo}
                </div>
                <div className="w-3/12">
                    <div className="h-1/2">

                    </div>
                    <div className=" h-1/2 border-t-2 border-gray-300">

                    </div>
                </div>
                <div className="w-1/12">
                    <div className="h-1/2">

                    </div>
                    <div className=" h-1/2 border-l-2 border-gray-300">

                    </div>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="w-1/12 border-r-2 border-gray-300">

                </div>
                <div className="w-10/12">
                    {props.children}
                </div>
                <div className="w-1/12 border-l-2 border-gray-300">

                </div>
            </div>
            <div>
                <div className="flex flex-row mb-8"> {/* footer */}
                    <div className="w-1/12">
                        <div className=" h-1/2 border-r-2 border-gray-300">

                        </div>
                        <div className="h-1/2">

                        </div>
                    </div>
                    <div className="w-3/12">
                        <div className="h-1/2 border-b-2 border-gray-300">

                        </div>
                    </div>
                    <div className="w-4/12">
                        <div className="flex justify-center">
                            {props.footer}
                        </div>
                    </div>
                    <div className="w-3/12">
                        <div className="h-1/2 border-b-2 border-gray-300">

                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="w-1/12">
                        <div className=" h-1/2 border-l-2 border-gray-300">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Border;