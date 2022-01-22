import * as React from "react"
import Logo from "../Logo";

const Layout = () => {
    return (
        <div>
            <div className="flex flex-row"> {/* Logo */}
                <div className="w-1/12">
                    <div className="h-1/2">

                    </div>
                    <div className=" h-1/2 border-r-2 border-black">

                    </div>
                </div>
                <div className="w-3/12">
                    <div className="h-1/2">

                    </div>
                    <div className=" h-1/2 border-t-2 border-black">

                    </div>
                </div>
                <div className="w-4/12">
                    <Logo />
                </div>
                <div className="w-3/12">
                    <div className="h-1/2">

                    </div>
                    <div className=" h-1/2 border-t-2 border-black">

                    </div>
                </div>
                <div className="w-1/12">
                    <div className="h-1/2">

                    </div>
                    <div className=" h-1/2 border-l-2 border-black">

                    </div>
                </div>
            </div>
            <div className="h-96 flex flex-row">
                <div className="w-1/12 h-full border-r-2 border-black">

                </div>
                <div className="w-10/12 h-full">

                </div>
                <div className="w-1/12 h-full border-l-2 border-black">

                </div>
            </div>
            <div>
                <div className="flex flex-row"> {/* Logo */}
                    <div className="w-1/12">
                        <div className=" h-1/2 border-r-2 border-black">

                        </div>
                        <div className="h-1/2">

                        </div>
                    </div>
                    <div className="w-3/12">
                        <div className="h-1/2">

                        </div>
                        <div className=" h-1/2 border-t-2 border-black">

                        </div>
                    </div>
                    <div className="w-4/12">
                        <div className="flex justify-center">
                            Footer
                        </div>
                    </div>
                    <div className="w-3/12">
                        <div className="h-1/2">

                        </div>
                        <div className=" h-1/2 border-t-2 border-black">

                        </div>
                    </div>
                    <div className="w-1/12">
                        <div className=" h-1/2 border-l-2 border-black">

                        </div>
                        <div className="h-1/2">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout;