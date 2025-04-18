import Section from "../../components/section/Section";
import "./about.css";
import Personal from "./tabs/tab-Personal";
import Professional from "./tabs/tab-Professional";

function About(props) {
    return (
        <Section id="about" setVisibleSection={props.setVisibleSection}>
            <div className="tabs tabs-lift">
                <Professional />
                <Personal />
            </div>
        </Section>
    );
}

export default About;