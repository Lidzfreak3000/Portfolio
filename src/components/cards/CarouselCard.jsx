

function CarouselCard(props) {
    return (
        <div id={props.id} className="carousel-item">
            <div className="carousel-card-wrapper rounded-2xl">
                <div className="carousel-card-content rounded-2xl p-4">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default CarouselCard;