import './BasicCard.css';

function BasicCard(props) {

    return (
        <div className="card-wrapper">
            <div className="card-content">
                {props.children}
            </div>
        </div>
    );
}

export default BasicCard;