import React from 'react';
import './Section.css';
import BasicCard from '../cards/BasicCard';
import CarouselCard from '../cards/CarouselCard';

function Section(props) {
    var cardContent

    if (props.carousel) {
        cardContent = <CarouselCard>{props.children}</CarouselCard>
    } else {
        cardContent = <BasicCard>{props.children}</BasicCard>
    }

    return (
        <div id={props.id} className="section overscroll-none">
            <header className="sectionHeader">
                <h1 className="mx-auto w-fit text-7xl">{props.id}</h1>
            </header>
            {cardContent}
        </div>
    );
}

export default Section;