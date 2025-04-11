import Section from "../../components/section/Section";

function Contact(props) {
    return (
        <Section id="contact" setVisibleSection={props.setVisibleSection}>
            <div className="flex items-center justify-center gap-4">
                <fieldset className="fieldset bg-base-200 border border-base-300 p-4 rounded-box">
                    <legend className="fieldset-legend">Email me</legend>
                    {/* Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Left Column */}
                        <div className="grid grid-rows-3">
                            {/* Name Field */}
                            <div className="row-1">
                                <label className="fieldset-label justify-between">name</label>
                                <input type="text" className="input w-full validator" required placeholder="name" pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" />
                                <div className="validator-hint">
                                    Must be 3 to 30 characters
                                    <br />containing only letters, numbers or dash
                                </div>
                            </div>
                            {/* Email Field */}
                            <div className="row-2">
                                <label className="fieldset-label justify-between">email</label>
                                <input type="email" className="input validator w-full" required placeholder="mail@site.com" />
                                <div className="validator-hint">Enter valid email address</div>
                            </div>
                            {/* Subject Field */}
                            <div className="row-3">
                                <label className="fieldset-label justify-between">subject</label>
                                <input type="text" className="input w-full validator" required placeholder="subject" pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" />
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
                                placeholder="message"
                                pattern={/^[\w\s.,!?;:'"-]*$/}
                                title="Letters, numbers, spaces, and standard punctuation allowed"
                                minLength={50}
                                required
                            />
                            <div className="validator-hint">
                                Only letters, numbers, spaces, <br />and basic punctuation (. , ! ? ; : ' " -)
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </div>
        </Section>
    );
}

export default Contact;