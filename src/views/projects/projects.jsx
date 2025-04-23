import CarouselCard from "../../components/cards/CarouselCard";
import Section from "../../components/section/Section";
import BatteryManagementDashboard from "./individual-projects/battery-management-dashboard";
import BPMS from "./individual-projects/bpms";
import ComputerVisionFormReader from "./individual-projects/computer-vision-form-reader";
import ConnectingWithMicroservices from "./individual-projects/connecting-with-microservices";
import HardwareDataLogger from "./individual-projects/hardware-data-logger";
import MotionSensorNetwork from "./individual-projects/motion-sensor-network";

function Projects(props) {
    return (
        <Section id="projects" setVisibleSection={props.setVisibleSection} carousel={true}>
            <CarouselCard id={1}>
                <BPMS />
            </CarouselCard>
            <CarouselCard id={2}>
                <BatteryManagementDashboard />
            </CarouselCard>
            <CarouselCard id={3}>
                <ComputerVisionFormReader />
            </CarouselCard>
            <CarouselCard id={4}>
                <ConnectingWithMicroservices />
            </CarouselCard>
            <CarouselCard id={5}>
                <HardwareDataLogger />
            </CarouselCard>
            <CarouselCard id={6}>
                <MotionSensorNetwork />
            </CarouselCard>
        </Section>
    );
}

export default Projects;