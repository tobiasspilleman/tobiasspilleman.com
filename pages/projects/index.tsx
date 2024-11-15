import NavigationBar from "../../components/NavigationBar"

const Projects = () => {
    return (
        <>
            <NavigationBar />
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="font-bold text-4xl font-inter">Projects</h1>
                    <p className="font-inter text-gray-600 mt-4">Here are some awesome projects I have worked on.</p>
                </div>
            </div>
        </>
    )
}

export default Projects;