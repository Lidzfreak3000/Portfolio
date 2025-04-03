function LoadingText(props) {
    return (
        <div className="flex space-x-1">
            <div className="w-2 aspect-square rounded-full bg-secondary animate-bounce"></div>
            <div className="w-2 aspect-square rounded-full bg-secondary animate-bounce [animation-delay:-0.16s]"></div>
            <div className="w-2 aspect-square rounded-full bg-secondary animate-bounce [animation-delay:-0.32s]"></div>
        </div>
    );
}

export default LoadingText;