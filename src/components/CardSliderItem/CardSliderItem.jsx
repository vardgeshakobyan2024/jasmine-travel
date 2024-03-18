import './cardSliderItem.css';

const CardSliderItem = ({data, name}) => {
    return (
        <div className="cardSliderItem">
            <img src={data.image} alt={name}/>
            <h4>{name}</h4>

            <div className="textBlock">
                <p>{data.description}</p>
            </div>
        </div>
    )
}

export default CardSliderItem;