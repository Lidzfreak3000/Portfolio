import "./Alerts.css"

import { useState } from 'react';

function ClosableAlert() {
    const [isVisible, setIsVisible] = useState(true);
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => setIsVisible(false), 300);
    };

    if (!isVisible) return null;

    return (
        <div
            role="alert"
            className={`alert alert-info alert-vertical sm:alert-horizontal transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'
                }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>New software update available.</span>
            <button
                className="btn btn-sm btn-circle btn-info"
                onClick={handleClose}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="aspect-square h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
}

export default ClosableAlert;