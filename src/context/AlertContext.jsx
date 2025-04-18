import React, { createContext, useState } from 'react';

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const [alerts, setAlerts] = useState([]);

    const addAlert = (alert) => {
        // Unique ID for each alert
        const id = Date.now();
        setAlerts((prev) => [...prev, { ...alert, id }]);

        // Set timeout to remove alert after 5 seconds
        if (alert.timeout) {
            setTimeout(() => {
                setAlerts((prev) => prev.filter((a) => a.id !== id));
            }, 5000);
        }
    };

    const removeAlert = (id) => {
        setAlerts((prev) => prev.filter((alert) => alert.id !== id));
    };

    return (
        <AlertContext.Provider value={{ alerts, addAlert, removeAlert }}>
            {children}
        </AlertContext.Provider>
    );
};