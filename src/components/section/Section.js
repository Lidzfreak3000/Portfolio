import React from 'react';
import './Section.css';
import BasicCard from '../cards/BasicCard';
import Carousel from '../cards/Carousel';

function Section(props) {
    var cardContent

    if (props.carousel) {
        cardContent = <Carousel>{props.children}</Carousel>
    } else {
        cardContent = <BasicCard>{props.children}</BasicCard>
    }

    return (
        <div id={props.id} className="section overscroll-none">
            <header className="sectionHeader md:top-[20vh]">
                <h1 className="mx-auto w-fit text-7xl">{props.id}</h1>
            </header>
            {cardContent}
        </div>
    );
}

export default Section;