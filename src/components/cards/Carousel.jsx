import { useState, useEffect } from 'react';
import './Carousel.css';

function Carousel(props) {
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
        <div className="flex-9/10 grow flex flex-col md:mb-16 md:mx-32">
            <div className="flex-9/10 grow m-2 carousel carousel-center bg-base-300 rounded-box space-x-2 p-4 border-2 border-neutral">
                {props.children}
            </div>
            <div id="carousel-indicator-buttons" className="flex-1/10 join rounded-box m-auto gap-2 p-2 bg-base-100 border-2 border-neutral">
                <button className="join-item btn btn-neutral h-full" onClick={() => {scrollToPage("left")}} disabled={currentCarouselItem <= 1}>«</button>
                <button className="join-item btn btn-neutral h-full">{currentCarouselItem}/{carouselItems.length}</button>
                <button className="join-item btn btn-neutral h-full" onClick={() => {scrollToPage("right")}} disabled={currentCarouselItem >= carouselItems.length}>»</button>
            </div>
        </div>
    );
}

export default Carousel;