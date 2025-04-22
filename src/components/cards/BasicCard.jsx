import './BasicCard.css';

function BasicCard(props) {

    return (
        <div className="flex-8/10 grow card-wrapper rounded-box rounded-2xl overflow-hidden m-2">
            <div className="card-content rounded-box rounded-2xl p-4">
                {props.children}
            </div>
        </div>
    );
}

export default BasicCard;