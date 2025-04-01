import './CarouselCard.css';

function CarouselCard(props) {

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
            <div className="carousel-indicator-buttons">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </>
    );
}

export default CarouselCard;