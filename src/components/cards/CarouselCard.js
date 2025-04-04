

function CarouselCard(props) {
    return (
        <div id={props.id} className="carousel-item">
            <div className="carousel-card-wrapper">
                <div className="carousel-card-content">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default CarouselCard;