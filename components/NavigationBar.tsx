const NavigationBar = () => {

    return (
        <>
            <nav className="w-screen bg-white bg-opacity-70 backdrop-blur-md px-10 lg:px-64 py-4 border-b border-gray-300 flex items-center">                <div>
                    <h2 className="font-bold text-2xl font-inter">Tobias Spilleman</h2>
                </div>
                <div className="flex justify-end ml-auto">
                    <a href="#" className="text-sm font-inter text-gray-600 font-medium">Home</a>
                    <a href="#" className="text-sm font-inter text-gray-600 font-medium ml-4">Projects</a>
                    <a href="#" className="text-sm font-inter text-gray-600 font-medium ml-4">Contact</a>
                </div>
            </nav>
        </>
    )
}

export default NavigationBar;