import { useState } from 'react';
import './CarouselCard.css';

function CarouselCard(props) {
    const [carouselItem, setCarouselItem] = useState(1);

    function handleClick(itemID) {
        setCarouselItem(id => itemID)
    }

    return (
        <>
            <div className="carousel carousel-center bg-neutral rounded-box space-x-4 p-4">
                <div className="carousel-item">
                    <div className="carousel-card-wrapper">
                        <div className="carousel-card-content">
                            {props.children}
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-card-wrapper">
                        <div className="carousel-card-content">
                            {props.children}
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-card-wrapper">
                        <div className="carousel-card-content">
                            {props.children}
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-card-wrapper">
                        <div className="carousel-card-content">
                            {props.children}
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-card-wrapper">
                        <div className="carousel-card-content">
                            {props.children}
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-card-wrapper">
                        <div className="carousel-card-content">
                            {props.children}
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-card-wrapper">
                        <div className="carousel-card-content">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
            <div id="carousel-indicator-buttons" className="join bg-neutral rounded-box">
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" checked={carouselItem === 1} />
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" checked={carouselItem === 2} />
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" checked={carouselItem === 3} />
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" checked={carouselItem === 4} />
            </div>
        </>
    );
}

export default CarouselCard;