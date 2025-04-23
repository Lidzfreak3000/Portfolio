import { useContext, useEffect, useState } from "react";
import Section from "../../components/section/Section";
import { AlertContext } from "../../context/AlertContext";


function Contact(props) {
    const baseUrl = import.meta.env.VITE_API_URL;
    const { addAlert } = useContext(AlertContext);
    const [alerts, setAlerts] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "recipients": formData.email,
            "subject": "Portfolio Contact Form: " + formData.subject,
            "body": formData.message
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch(baseUrl, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.statusCode) {
                    addAlert({
                        message: result.message,
                        type: 'error',
                        timeout: false
                    })
                } else {
                    addAlert({
                        message: 'Email has been sent! Make sure to check your spam folder for the confirmation email',
                        type: 'success',
                        timeout: true
                    })
                }
            })
            .catch((error) => addAlert({
                message: JSON.stringify(error),
                type: 'error',
                timeout: false
            }));
    };

    // useEffect(() => {
    //     addAlert({
    //         message: 'This is a success message!',
    //         type: 'success',
    //         timeout: false,
    //     });
    // }, [])

    return (
        <Section id="contact" setVisibleSection={props.setVisibleSection} alerts={alerts}>
            <form className="flex size-full" onSubmit={handleSubmit}>
                <fieldset className="m-auto fieldset bg-base-200 border border-base-300 p-4 rounded-box">
                    <legend className="fieldset-legend">Email me</legend>
                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Left Column */}
                        <div className="grid grid-rows-3">
                            {/* Name Field */}
                            <div className="row-1">
                                <label className="fieldset-label justify-between">name</label>
                                <input
                                    type="text"
                                    className="input w-full validator"
                                    required
                                    name="name"
                                    placeholder="name"
                                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                                    minLength="3"
                                    maxLength="30"
                                    onChange={handleChange}
                                />
                                <div className="validator-hint">
                                    Must be 3 to 30 characters
                                    <br />containing only letters, numbers or dash
                                </div>
                            </div>
                            {/* Email Field */}
                            <div className="row-2">
                                <label className="fieldset-label justify-between">email</label>
                                <input
                                    type="email"
                                    className="input validator w-full"
                                    required
                                    name="email"
                                    placeholder="mail@site.com"
                                    onChange={handleChange}
                                />
                                <div className="validator-hint">Enter valid email address</div>
                            </div>
                            {/* Subject Field */}
                            <div className="row-3">
                                <label className="fieldset-label justify-between">subject</label>
                                <input
                                    type="text"
                                    className="input w-full validator"
                                    required
                                    name="subject"
                                    placeholder="subject"
                                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                                    minLength="3"
                                    maxLength="30"
                                    onChange={handleChange}
                                />
                                <div className="validator-hint">
                                    Must be 3 to 30 characters
                                    <br />containing only letters, numbers or dash
                                </div>
                            </div>
                        </div>
                        {/* Right Column */}
                        <div className="md:col-2 md:h-full flex flex-col">
                            <label className="fieldset-label">message</label>
                            <textarea
                                className="textarea validator flex-grow"
                                name="message"
                                placeholder="message"
                                pattern={/^[\w\s.,!?;:'"-]*$/}
                                title="Letters, numbers, spaces, and standard punctuation allowed"
                                required
                                onChange={handleChange}
                            />
                            <div className="validator-hint">
                                Only letters, numbers, spaces, <br />and basic punctuation (. , ! ? ; : ' " -)
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button className="btn btn-neutral mt-4">Submit</button>
                </fieldset>
            </form>
        </Section>
    );
}

export default Contact;