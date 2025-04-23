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
        <div id={props.id} className="section overscroll-none size-full max-md:pb-[calc(5rem+env(safe-area-inset-bottom))] md:pr-[calc(5rem+env(safe-area-inset-bottom))] md:flex-col">
            <header className="flex-1/10 flex sectionHeader">
                <h1 className="m-auto text-center text-5xl size-fit">{props.id}</h1>
            </header>
            {cardContent}
        </div>
    );
}

export default Section;