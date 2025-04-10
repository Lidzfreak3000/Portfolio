import CarouselCard from "../../components/cards/CarouselCard";
import Section from "../../components/section/Section";

function Projects(props) {
    return (
        <Section id="projects" setVisibleSection={props.setVisibleSection} carousel={true}>
            <CarouselCard id={1}>
                <div className="grid gris-cols-1 md:grid-cols-3 md:grid-rows-2 size-full gap-2">
                    <div className="border border-neutral rounded-box p-2">Problem</div>
                    <div className="border border-neutral rounded-box p-2">Solution & Tech Stack (Bullet points for scannability)</div>
                    <div className="border border-neutral rounded-box p-2 row-span-2">Visuals & Links</div>
                    <div className="border border-neutral rounded-box p-2">My Role</div>
                    <div className="border border-neutral rounded-box p-2">Quantified Results</div>
                </div>
            </CarouselCard>
            <CarouselCard id={2}>

            </CarouselCard>
            <CarouselCard id={3}>

            </CarouselCard>
        </Section>
    );
}

export default Projects;