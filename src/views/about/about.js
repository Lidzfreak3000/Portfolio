import Section from "../../components/section/Section";

function About(props) {
    return (
    <Section id="about" setVisibleSection={props.setVisibleSection}>
        <h1 className=''> Welcome to my personal site 😎</h1>
    </Section>
    );
}

export default About;