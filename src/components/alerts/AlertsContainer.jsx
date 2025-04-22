import "./Alerts.css"
import { AlertContext } from '../../context/AlertContext';
import { useContext } from "react";
import { Alert } from "./Alert";


function AlertsContainer(props) {
    const { alerts, removeAlert } = useContext(AlertContext);

    return (
        <div id="alerts-container" className="toast z-10">
            {alerts.map((alert) => (
                <Alert
                    key={alert.id}
                    message={alert.message}
                    type={alert.type}
                    onClose={() => removeAlert(alert.id)}
                />
            ))}
        </div>
    );
}

export default AlertsContainer;