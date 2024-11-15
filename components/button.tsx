const Button = ({ text, callBackFunction } : { text: string, callBackFunction: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void}) => {
    return (
        <div onClick={callBackFunction} className="flex justify-center bg-black max-w-full rounded p-2 cursor-pointer">
            <p className="text-white font-medium text-xl">
                {text}
            </p>
        </div>
    )
};

export default Button;