const ResponsiveWrapper = ({ children }) => {
    return (
        <div className="flex flex-col justify-center items-center w-full py-10">
            <div className="p-[5vw] sm:p-0 w-full sm:w-3/4 md:w-1/2 h-full">
                {children}
            </div>
        </div>
    );
}

export default ResponsiveWrapper;