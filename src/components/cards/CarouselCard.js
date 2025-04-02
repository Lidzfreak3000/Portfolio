import { useState, useEffect, useRef } from 'react';
import './CarouselCard.css';

function CarouselCard(props) {
    const [currentCarouselItem, setCurrentCarouselItem] = useState("1");
    const [carouselItems, setCarouselItems] = useState([]);

    const scrollToPage = (direction) => {
        const scrollBox = document.querySelector(".carousel")
        if (scrollBox) {
            const containerWidth = document.querySelector(".carousel-item").clientWidth;

            if (direction == "left") { //move the carousel 1 space left
                scrollBox.scrollTo({
                    left: (containerWidth * (currentCarouselItem - 2)),
                    behavior: 'smooth'
                });
            } else {
                scrollBox.scrollTo({
                    left: containerWidth * currentCarouselItem,
                    behavior: 'smooth'
                });
            }
        }
    };

    // Load the Carousel Items into the state so that the useEffect with the Observers 
    // (which are needed so that users scrolling horizontally still updates the Project counter) 
    // can register the observers that get attached to each Carousel Item AFTER the 
    // Carousel Items have rendered. 
    useEffect(() => {
        const carouselItemsDivs = document.querySelectorAll(".carousel-item")
        setCarouselItems(carouselItemsDivs)
    }, [])

    useEffect(() => {
        let observerOptions = {
            threshold: 0.5
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(
                (entry) => {
                    if (entry.isIntersecting) {
                        setCurrentCarouselItem(entry.target.id)
                    }
                });
        }, observerOptions);

        carouselItems.forEach((item) => {
            observer.observe(item);
        })

        return () => observer.disconnect();
    }, [carouselItems]);

    return (
        <>
            <div className="carousel carousel-center bg-neutral rounded-box space-x-4 p-4">
                <div id="1" className="carousel-item">
                    <div className="carousel-card-wrapper">
                        <div className="carousel-card-content">
                            {props.children}
                        </div>
                    </div>
                </div>
                <div id="2" className="carousel-item">
                    <div className="carousel-card-wrapper">
                        <div className="carousel-card-content">
                            {props.children}
                        </div>
                    </div>
                </div>
                <div id="3" className="carousel-item">
                    <div className="carousel-card-wrapper">
                        <div className="carousel-card-content">
                            {props.children}
                        </div>
                    </div>
                </div>
                <div id="4" className="carousel-item">
                    <div className="carousel-card-wrapper">
                        <div className="carousel-card-content">
                            {props.children}
                        </div>
                    </div>
                </div>
                <div id="5" className="carousel-item">
                    <div className="carousel-card-wrapper">
                        <div className="carousel-card-content">
                            {props.children}
                        </div>
                    </div>
                </div>
                <div id="6" className="carousel-item">
                    <div className="carousel-card-wrapper">
                        <div className="carousel-card-content">
                            {props.children}
                        </div>
                    </div>
                </div>
                <div id="7" className="carousel-item">
                    <div className="carousel-card-wrapper">
                        <div className="carousel-card-content">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
            <div id="carousel-indicator-buttons" className="join bg-neutral rounded-box">
                <button className="join-item btn" onClick={() => {scrollToPage("left")}} disabled={currentCarouselItem <= 1}>«</button>
                <button className="join-item btn">Project {currentCarouselItem}</button>
                <button className="join-item btn" onClick={() => {scrollToPage("right")}} disabled={currentCarouselItem >= carouselItems.length}>»</button>
            </div>
        </>
    );
}

export default CarouselCard;