

function CarouselCard(props) {
    return (
        <div id={props.id} className="carousel-item size-full">
            <div className="carousel-card-wrapper rounded-2xl size-full">
                <div className="carousel-card-content rounded-2xl p-4">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default CarouselCard;