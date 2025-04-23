import './BasicCard.css';

function BasicCard(props) {

    return (
        <div className="flex-9/10 grow card-wrapper rounded-box rounded-2xl overflow-hidden max-md:m-2 md:mb-16 md:mx-32">
            <div className="card-content rounded-box rounded-2xl p-4">
                {props.children}
            </div>
        </div>
    );
}

export default BasicCard;