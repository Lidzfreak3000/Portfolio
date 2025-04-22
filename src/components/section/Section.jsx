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
            <div className="flex-1/10" /> {/* This is a placeholder for the alerts container in screens below the 'md' breakpoint */}
            <header className="flex-1/10 sectionHeader">
                <h1 className="mx-auto w-fit text-7xl">{props.id}</h1>
            </header>
            {cardContent}
            <div className="flex-1/10" /> {/* This is a placeholder for the alerts container in screens below the 'md' breakpoint */}
        </div>
    );
}

export default Section;