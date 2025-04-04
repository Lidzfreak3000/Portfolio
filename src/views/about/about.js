import Section from "../../components/section/Section";
import "./about.css";

function About(props) {
    return (
        <Section id="about" setVisibleSection={props.setVisibleSection}>
            <div className="tabs tabs-border size-full content-start">
                <input type="radio" name="my_tabs_1" className="tab" aria-label="Tab 1" />
                <div className="tab-content border-base-300 bg-base-100 p-10">Tab content 1</div>

                <input type="radio" name="my_tabs_1" className="tab" aria-label="Tab 2" defaultChecked />
                <div className="tab-content border-base-300 bg-base-100 p-10">Tab content 2</div>

                <input type="radio" name="my_tabs_1" className="tab" aria-label="Tab 3" />
                <div className="tab-content border-base-300 bg-base-100 p-10">Tab content 3</div>
            </div>
        </Section>
    );
}

export default About;