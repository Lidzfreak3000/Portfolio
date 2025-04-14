import { useContext, useState } from "react";
import Section from "../../components/section/Section";
import { AlertContext } from "../../context/AlertContext";


function Contact(props) {
    const baseUrl = "http://localhost:7071/api/sendEmail";
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

        addAlert({
            message: 'This is a success message!',
            type: 'success',
            timeout: true
          });

        // Add email address to an array of addresses for the recipients
        var recipientAddresses = ['j.r.nerdy@hotmail.com'];
        recipientAddresses.push(formData.email);

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "recipients": recipientAddresses,
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
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    };

    return (
        <Section id="contact" setVisibleSection={props.setVisibleSection} alerts={alerts}>
            <form className="flex items-center justify-center gap-4" onSubmit={handleSubmit}>
                <fieldset className="fieldset bg-base-200 border border-base-300 p-4 rounded-box">
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