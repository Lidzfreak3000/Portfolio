import './BasicCard.css';

function BasicCard(props) {

    return (
        <div className="card-wrapper bg-neutral rounded-box">
            <div className="card-content">
                {props.children}
            </div>
        </div>
    );
}

export default BasicCard;