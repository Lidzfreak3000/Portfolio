import './BasicCard.css';

function BasicCard(props) {

    return (
        <div className="card-wrapper rounded-box rounded-2xl overflow-hidden">
            <div className="card-content rounded-box rounded-2xl p-4">
                {props.children}
            </div>
        </div>
    );
}

export default BasicCard;