import CarouselCard from "../../components/cards/CarouselCard";
import Section from "../../components/section/Section";

function Projects(props) {
    return (
        <Section id="projects" setVisibleSection={props.setVisibleSection} carousel={true}>
            <CarouselCard id={1}>
                <div className="grid grid-cols-3 grid-rows-2 size-full">
                    <div className="bg-conic from-pink-400 from-40% to-white p-1 border-base-content border-opacity-25 border-r-2 border-b-2 ">Problem</div>
                    <div className="bg-conic from-pink-400 from-40% to-white p-1 border-base-content border-opacity-25 border-l-2 border-b-2 border-r-2 ">Solution & Tech Stack (Bullet points for scannability)</div>
                    <div className="bg-conic from-pink-400 from-40% to-white p-1 border-base-content border-opacity-25 row-span-2 border-l-2 ">Visuals & Links</div>
                    <div className="bg-conic from-pink-400 from-40% to-white p-1 border-base-content border-opacity-25 border-t-2 border-r-2 ">My Role</div>
                    <div className="bg-conic from-pink-400 from-40% to-white p-1 border-base-content border-opacity-25 border-t-2 border-l-2 border-r-2 ">Quantified Results</div>
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