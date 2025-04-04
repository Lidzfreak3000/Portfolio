import Section from "../../components/section/Section";

function About(props) {
    return (
        <Section id="about" setVisibleSection={props.setVisibleSection}>
            <figure className="diff h-full w-full" tabIndex={0}>
                <div className="diff-item-1" role="img">
                    <div className="bg-primary text-primary-content grid place-content-center text-9xl font-black">
                        DAISY
                    </div>
                </div>
                <div className="diff-item-2" role="img" tabIndex={0}>
                    <div className="bg-base-200 grid place-content-center text-9xl font-black">DAISY</div>
                </div>
                <div className="diff-resizer"></div>
            </figure>
        </Section>
    );
}

export default About;