import Section from "../../components/section/Section";

function Projects(props) {
    return (
    <Section id="projects" setVisibleSection={props.setVisibleSection} carousel={true}>
        <h1 className=''> Welcome to my personal site 😎</h1>
    </Section>
    );
}

export default Projects;