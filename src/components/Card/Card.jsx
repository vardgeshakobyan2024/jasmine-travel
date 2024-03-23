import CardItem from '../CardItem/CardItem';
import './card.css';
import Evoca from '../../images/evoca.png';
import Idram from '../../images/idram.png';
import Acba from '../../images/acba.png';

const Card = () => {
    const cardInform = [
        {
            id: 1,
            cardNumber: "1660 0191 2616 0100",
            name: "Hasmik Petrosyan",
            images: Evoca
        },
        {
            id: 2,
            cardNumber: "1181 8008 5219 00",
            name: "Hasmik Petrosyan",
            images: Idram
        },
        {
            id: 3,
            cardNumber: "2200 9793 2705 000",
            name: "Hasmik Petrosyan",
            images: Acba
        }
    ]

    const tableInfo = [
        "Գումարը փոխանցելուն պես կապնվեք ինձ հետ մեր facebook - ով` jasminetravel",
        "Դասերի մեկնարկը Ապրիլի 18-ից",
        "Դասերը անցնելու են telegram-ի փակ ալիքում:",
        "Կապը whats app-ով"
    ]
    return (
        <div className="cardParent">
            <div className="container">
                <div className="card">
                    <h6 className='cardHeader'>ՔԱՐՏԻՑ ՔԱՐՏ ՓՈԽԱՆՑՈՒՄ <br /> ՀՀ ԲԱՆԿԵՐԻ ՄԻՋԵՎ</h6>

                    {
                        cardInform.map((el) => {
                            return (
                                <CardItem 
                                    key={el.id}
                                    images={el.images}
                                    cardNumber={el.cardNumber}
                                    name={el.name}
                                />
                            )
                        })
                    }

                    <div className="table" id="table">
                        {
                            tableInfo.map((el, idx) => {
                                return (
                                    <div className="tableItem" key={idx}>
                                        <p>{el}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;