import './chatMessage.css'

import { useEffect, useState } from "react";
import profilePicture from "../../assets/DSC09813.jpg"
import LoadingText from "./LoadingText";

function ChatMessage(props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, props.delay * props.id);
    }, [])

    return (
        <div className={props.currentMessage >= props.id ? "chat chat-start" : "chat chat-start hidden pause-animation"}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src={profilePicture} />
                </div>
            </div>
            <div className="chat-bubble place-content-center">
                {
                    isLoading ?
                        <LoadingText /> :
                        props.children
                }
            </div>
        </div>
    );
}

export default ChatMessage;