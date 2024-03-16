import './cardItem.css';

const CardItem = ({images, cardNumber, name}) => {
    return (
        <div className="cardItem">
            <div className="cardImages">
                <img src={images} alt=''/>
            </div>
            <div className="cardNumber">
                <b>{cardNumber}</b>
                <br />
                <p>{name}</p>
            </div>
        </div>
    )
}

export default CardItem;