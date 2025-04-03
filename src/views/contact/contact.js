import Section from "../../components/section/Section";

function Contact(props) {
    return (
    <Section id="contact" setVisibleSection={props.setVisibleSection}>
        <h1 className=''> Welcome to my personal site 😎</h1>
    </Section>
    );
}

export default Contact;